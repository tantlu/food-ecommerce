import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type CustomButtonProps = ButtonProps &
  PropsWithChildren<{
    onClick: () => void;
  }>;

const CustomButton = ({ children, onClick, ...props }: CustomButtonProps) => {
  return (
    <Button
      border={"1px solid"}
      px={10}
      my={2}
      fontSize={"12px"}
      mr={2}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
