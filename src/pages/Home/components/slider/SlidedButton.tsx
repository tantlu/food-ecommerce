import { Button, ButtonProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type SlidedButtonProps = PropsWithChildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> &
  ButtonProps;

const SlidedButton = ({ children, onClick, ...props }: SlidedButtonProps) => {
  return (
    <Button
      variant="unstyled"
      position={"absolute"}
      border="1px solid"
      borderColor="primary"
      borderRadius="none"
      _hover={{ bgColor: "white" }}
      onClick={onClick}
      bgColor="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SlidedButton;
