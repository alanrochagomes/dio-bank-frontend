import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
  onClick: MouseEventHandler;
}

export const Dbutton = ({ onClick }: IDButton) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor="#FF4B60"
      size="md"
      width="100%"
      marginTop="5px"
    >
      Entrar
    </Button>
  );
};
