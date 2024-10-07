import {
  Box,
  Center,
  ChakraProvider,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { login } from "../../services/login";
import "./Login.css";
import { useContext, useState } from "react";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../components/AppContext";
import { Dbutton } from "../../components/DButton";

const Login = ({ children }: any) => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert("Email inválido");
    }

    setIsLoggedIn(true);
    navigate("/conta/1");
  };

  return (
    <ChakraProvider>
      {children}
      <Layout>
        <Box minHeight="90vh" backgroundColor="#1E192C" padding="25px">
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
                <Dbutton onClick={() => validateUser(email)} />
              </Stack>
            </Box>
          </Center>
        </Box>
      </Layout>
    </ChakraProvider>
  );
};

export default Login;
function usseContext(): { setIsLoggedIn: any } {
  throw new Error("Function not implemented.");
}
