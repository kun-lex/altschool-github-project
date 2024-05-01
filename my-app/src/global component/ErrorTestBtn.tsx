import { Box } from '@chakra-ui/react';

function ErrorTestBtn() {
  const handleClick = () => {
    alert('Error Test');
  };

  return (
    <Box
      as="button"
      type="button"
      onClick={handleClick}
      position="fixed"
      bottom="4"
      right="4"
      p="3"
      bg="purple.700"
      color="white"
      borderRadius="full"
      textDecoration="none"
      zIndex="999"
      _hover={{
        animation: 'pulse 1s infinite',
      }}
      _focus={{
        outline: 'none',
      }}
      _active={{
        transform: 'scale(0.95)',
      }}
    >
      Error Test
    </Box>
  );
}

export default ErrorTestBtn;
