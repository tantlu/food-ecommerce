import {
  Center,
  Circle,
  Flex,
  Icon,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { BsBagPlus } from "react-icons/bs";
import CartModal from "./CartModal";
import { NavLink } from "react-router-dom";
type Props = {};

const Cart = (props: Props) => {
  const [isModalDisplay, setIsModalDisplay] = useState<boolean>(false);

  return (
    <Box position="relative">
      <Button
        ml={10}
        variant="unstyled"
        onClick={() => setIsModalDisplay(!isModalDisplay)}>
        <Flex>
          <Flex position="relative">
            <Center>
              <Icon as={BsBagPlus} boxSize={7} />
            </Center>
            <Circle
              position="absolute"
              left={4}
              bg="main"
              color="white"
              size="18px"
              fontSize="10px">
              0
            </Circle>
          </Flex>
          <Center>
            <Text fontWeight="400" pl={3} fontSize="14px">
              Giỏ hàng
            </Text>
          </Center>
        </Flex>
      </Button>
      {isModalDisplay && <CartModal />}
    </Box>
  );
};

export default Cart;
