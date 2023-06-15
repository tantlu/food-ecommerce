import { forwardRef, Button, ButtonProps } from "@chakra-ui/react";

const CustomButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button
    display="flex"
    color="primary"
    variant="unstyled"
    ref={ref}
    {...props}
  />
));

export default CustomButton;
