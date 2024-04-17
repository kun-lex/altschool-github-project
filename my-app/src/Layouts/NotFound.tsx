// NotFoundPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const NotFoundPage: React.FC = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading size="xl">404 - Not Found</Heading>
      <Text mt={4} fontSize="lg">The page you are looking for does not exist.</Text>
      <Link to="/">
        <Button mt={6} colorScheme="blue">Go to Home</Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
