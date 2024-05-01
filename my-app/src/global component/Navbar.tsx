import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, PhoneIcon } from '@chakra-ui/icons';
import Logo from '../assets/images/Techboy.png';

const Links = [
  { label: 'Home', route: '/' },
  { label: 'Blog', route: '/blog' },
  { label: 'Projects', route: '/projects' },
  { label: 'Repo', route: '/repo' },
];

interface NavLinkProps {
  label: string;
  route: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, route }) => (
  <Box
    as="a"
    href={route}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {label}
  </Box>
);

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w="100%" zIndex={200}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                alt={'My Logo'}
                fit={'cover'}
                w={'90px'}
                h={'90px'}
                src={Logo}
              />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map(({ label, route }) => (
                <NavLink key={label} label={label} route={route} />
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
            <Button
              variant={'solid'}
              color={'white'}
              backgroundColor={'#A100ED'}
              size={'sm'}
              ml={4}
              leftIcon={<PhoneIcon />}
              onClick={onOpen} // Open modal on button click
            >
              Contact Me!
            </Button>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ label, route }) => (
                <NavLink key={label} label={label} route={route} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacing={4}>
              <Link href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank">LinkedIn</Link>
              <Link href="https://www.instagram.com/your-instagram-profile/" target="_blank">Instagram</Link>
              <Link href="https://www.facebook.com/your-facebook-profile/" target="_blank">Facebook</Link>
              <Link href="https://twitter.com/your-twitter-profile/" target="_blank">Twitter</Link>
              <Link href="https://wa.me/your-phone-number" target="_blank">WhatsApp</Link>
              {/* Add more platforms as needed */}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            {/* Add any additional footer content here */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;