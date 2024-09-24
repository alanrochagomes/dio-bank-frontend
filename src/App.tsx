import { ChakraProvider, Input, Center } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Center>
        <h1>Faça o login</h1>
      </Center>

      <Input placeholder="email" />
      <Input placeholder="password" />
    </ChakraProvider>
  );
}

export default App;
