import {
  Text,
  Box,
  Button,
  Flex,
  Input,
  Link,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { NavLink } from "react-router-dom";

const CartModal = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <Box
      width="300%"
      height="auto"
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"md"}
      position="absolute"
      left={"-150%"}
      top={10}
      zIndex="10"
      padding={"2"}>
      <Box
        textAlign={"center"}
        borderBottom={"1px"}
        borderColor="gray.200"
        p={"3"}>
        <Heading as="h6" fontSize={"18px"}>
          Giỏ hàng
        </Heading>
      </Box>

      <Box
        p={3}
        m={3}
        borderBottom={"1px"}
        borderColor="gray.200"
        textAlign={"center"}>
        <form>
          <Text fontSize={"13px"} color={"gray.600"}>
            Hiện chưa có sản phẩm
          </Text>
        </form>
      </Box>
      <Box>
        <Text as={"b"}>Tổng tiền</Text>
        <Text float={"right"}> {totalPrice}Đ </Text>
        <NavLink to={"/cart"}>
          <Button
            type="submit"
            variant={"solid"}
            mt={4}
            backgroundColor={"red"}
            colorScheme={"purple"}
            width={"100%"}
            borderRadius={"20px"}
            fontSize={"13px"}>
            Xem giỏ hàng
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default CartModal;
