import {
  Text,
  Box,
  Icon,
  Button,
  Flex,
  Input,
  Link,
  Heading,
} from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";
import InforOrder from "./components/inforOrder";
import InforCart from "./components/inforCart";

type Props = {};

const CartOrder = (props: Props) => {
  return (
    <Flex maxW={"1300px"} width="100%" m={"0 auto"}>
      <InforCart></InforCart>
      <InforOrder></InforOrder>
    </Flex>
  );
};

export default CartOrder;
