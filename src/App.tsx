import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { login } from "./services/login";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#1E192C" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>

          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button
              onClick={login}
              colorScheme="teal"
              size="md"
              width="100%"
              marginTop="5px"
            >
              Button
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
