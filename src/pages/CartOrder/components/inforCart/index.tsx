import { FRUIT_GIFTS_DATA } from "@/configs/fruitGiftsData";
import { RootState } from "@/store/slices/cartSlide";
import { ProductByCategory, Product, ProductVariant } from "@/types/product";
import {
  Text,
  Box,
  Icon,
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
  textDecoration,
  color,
  Checkbox,
  List,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

type Props = {};

const InforCart = () => {
  const products = useSelector((state: RootState) => state.products);

  const getCartItemInfo = (productId: string): Product | undefined => {
    return products.find(
      (product) => product.productId.toString() === productId
    );
  };

  return (
    <Flex>
      <form action="">
        <Box
          minW={"850px"}
          mr={"10"}
          w={"60%"}
          p={"4"}
          border="1px"
          borderColor="gray.200">
          <Box fontSize="xl">
            <Text as={"b"}>Giỏ hàng của bạn</Text>
          </Box>
        </Box>
        <Box
          minW={"850px"}
          mr={"10"}
          w={"60%"}
          p={"4"}
          border="1px"
          borderColor="gray.200">
          <Box fontSize="xl" as={"b"} mb={"5"}></Box>
        </Box>
      </form>
    </Flex>
  );
};

export default InforCart;
