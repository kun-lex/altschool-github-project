import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import AreaGuide from '../assets/project-screenshots/areaguide.png'
import FAB from '../assets/project-screenshots/fab.png'
import Netflix from '../assets/project-screenshots/netflix.png'
import Platform from '../assets/project-screenshots/theplatform.png'
import Trayde from '../assets/project-screenshots/trayde.png'
import U4C from '../assets/project-screenshots/u4c.png'
import { Link } from 'react-router-dom'


const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3, // Display three slides at once
  slidesToScroll: 1,
}

export default function Projects() {
  const [slider, setSlider] = React.useState<Slider | null>(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  const cards = [
    {
      title: 'AreaGuide',
      text: "Connecting users to geart local and international businesses and artisians..",
      image: AreaGuide,
      link: 'https://areaguide-app.vercel.app/'
    },
    {
      title: 'Netflix-clone',
      text: "A Neflix clone written with TypeScript.",
      image: Netflix,
      link: 'https://netflix-clone-swart-three.vercel.app/'
    },
    {
      title: 'Tradye',
      text: "Trayde NG offers exclusive deals and discounts, making quality affordable for everyone, and rewards loyal customers with additional savings through our loyalty program.",
      image: Trayde,
      link: 'https://trayde.com.ng/'
    },
    {
      title: "Under 40 CEO'S",
      text: "Under 40 CEOs leverage the power of youth, community, data, media and knowledge of the African terrain to build businesses that take the centre stage in Africa.",
      image:U4C,
      link: 'https://under40ceos.com/'
    },
    {
      title: "Fab Blog",
      text: "A nigerian based blog.",
      image:FAB,
      link: 'https://fab.ng/'
    },
    {
      title: "The Platform Hub",
      text: "We are in the business of transformation. Our services are tailored to inspire growth, foster innovation, and connect individuals with the opportunities they need to succeed. We believe in the power of dreams, the strength of connections, and the unlimited potential of those we serve.",
      image:Platform,
      link: 'https://theplatformuniversal.com/'
    },
  ]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box key={index} className="slick-slide pr-5" >
            <Link to={card.link  ?? '/'}>
            <Image src={card.image} alt={card.title} borderRadius={25} />
            <Container size="container.lg">
              <Stack spacing={6}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} className='text-center' >
                  {card.title}
                </Heading>
                <Text className='text-center' fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
