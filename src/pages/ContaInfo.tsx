import { Link, Text } from "@chakra-ui/react";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize="3xl" color="white">
        Informações da Conta
      </Text>
      <Link href="/conta/1">
        <Text fontSize="3xl" color="white">
          Conta
        </Text>
      </Link>
    </>
  );
};

export default ContaInfo;
