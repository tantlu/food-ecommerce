import { Product } from "@/types/product";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  product: Product;
};

const ProductDescribe = ({ product }: Props) => {
  const { description } = product;

  return (
    <Box maxW={"1300px"} width={"100%"} m={"0 auto"}>
      <Box pb={1} borderBottom={"1px solid"} borderColor={"gray.300"}>
        <Text
          borderBottom={"2px solid #333"}
          paddingBottom={"6px"}
          as="span"
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color="#333"
          fontSize={"16px"}
        >
          Mô tả sản phẩm
        </Text>
      </Box>
      <Text color="#333" fontSize={13} pt={2}>
        {description}
      </Text>
    </Box>
  );
};

export default ProductDescribe;
