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
import "./Login.css";
import { useState, useEffect } from "react";
import { api } from "../../api";
import { Layout } from "../../components/Layout";

interface UserData {
  email: string;
  password: string;
  name: string;
}

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  console.log(userData);

  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight="90vh" backgroundColor="#1E192C" padding="25px">
          {/* {userData === null || userData === undefined ? (
          <h1 color="white">Loading..</h1>
          ) : (
            <h1 color="white">Informações carregadas</h1>
            )} */}
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  // {/* TODO:  Criar um component IDButton colocar onClick: MouseEventHandler */}
                  onClick={() => login(email)}
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
      </Layout>
    </ChakraProvider>
  );
};

export default Login;
