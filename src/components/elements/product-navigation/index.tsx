import { Center, Circle } from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
type ProductNavigationProps = {
  handleNavigateLeft?: React.MouseEventHandler<HTMLDivElement>;
  handleNavigateRight?: React.MouseEventHandler<HTMLDivElement>;
};

const ProductNavigation = ({
  handleNavigateLeft,
  handleNavigateRight,
}: ProductNavigationProps) => {
  return (
    <Center>
      <Circle
        onClick={handleNavigateLeft}
        border="1px solid"
        borderColor="gray.300"
        as="button"
        bgColor="white"
        color="gray.500"
        _hover={{ bgColor: "primary", color: "white" }}
        mr={3}
      >
        <ChevronLeftIcon boxSize={6} />
      </Circle>
      <Circle
        onClick={handleNavigateRight}
        border="1px solid"
        borderColor="gray.300"
        as="button"
        bgColor="white"
        color="gray.500"
        _hover={{ bgColor: "primary", color: "white" }}
      >
        <ChevronRightIcon boxSize={6} />
      </Circle>
    </Center>
  );
};

export default ProductNavigation;
