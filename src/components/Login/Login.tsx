import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { login } from "../../services/login";
import "../Login/Login.css";

function Login() {
  return (
    <ChakraProvider>
      <Box minHeight="75vh" backgroundColor="#1E192C" padding="25px">
        <Center>
          <Box
            marginTop="100px"
            borderRadius="25px"
            padding="20px"
            width={{ base: "90%", sm: "400px" }}
            boxShadow="md"
          >
            <Heading
              as="h1"
              size="lg"
              textAlign="center"
              marginBottom="20px"
              color="white"
            >
              Faça o login
            </Heading>

            <Stack spacing={4}>
              <Input
                placeholder="Email"
                type="email"
                borderRadius="md"
                variant="outline"
                color="white"
              />
              <Input
                placeholder="Senha"
                type="password"
                borderRadius="md"
                variant="outline"
                color="white"
              />
              <Button
                onClick={login}
                backgroundColor="#FF4B60"
                size="md"
                width="100%"
                marginTop="5px"
              >
                Entrar
              </Button>
            </Stack>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
