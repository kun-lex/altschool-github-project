'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { FaReact, FaNodeJs, FaStar, FaRegStar } from 'react-icons/fa'
import { SiDjango, SiTailwindcss, SiWordpress } from 'react-icons/si'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
  rating: number // Add a rating property
}

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const stars = []
  const totalStars = 5

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<Icon as={FaStar} key={i} color="yellow.400" />)
    } else {
      stars.push(<Icon as={FaRegStar} key={i} color="gray.300" />)
    }
  }

  return <Flex>{stars}</Flex>
}

const Card = ({ heading, description, icon, rating }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <StarRating rating={rating} /> {/* Add star rating */}
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function SkillsCard() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          My Skills
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Some of my top programming skills and technologies I have worked with.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'React'}
            icon={<Icon as={FaReact} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
            rating={5} // Add a rating value
          />
          <Card
            heading={'Django'}
            icon={<Icon as={SiDjango} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
            rating={4} // Add a rating value
          />
          <Card
            heading={'Node.js'}
            icon={<Icon as={FaNodeJs} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
            rating={4} // Add a rating value
          />
          <Card
            heading={'Tailwind css'}
            icon={<Icon as={SiTailwindcss} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
            rating={5} // Add a rating value
          />
          <Card
            heading={'Wordpress'}
            icon={<Icon as={SiWordpress} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
            rating={5} // Add a rating value
          />
        </Flex>
      </Container>
    </Box>
  )
}
