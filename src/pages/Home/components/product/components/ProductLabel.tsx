import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type ProductLabelProps = PropsWithChildren<{}>;

const ProductLabel = ({ children }: ProductLabelProps) => {
  return (
    <Flex
      justifyContent="center"
      pt={20}
      m={"0 auto"}
      width="80%"
      borderBottom="1px solid"
      borderColor="gray.300"
    >
      <Heading
        textAlign={"center"}
        py="2"
        fontSize="22px"
        fontWeight={"extrabold"}
        border="1.5px solid"
        borderColor="primary"
        maxWidth="50%"
        width="100%"
        color="primary"
        textTransform="uppercase"
        as="h2"
        fontFamily="Quicksand"
      >
        {children}
      </Heading>
    </Flex>
  );
};

export default ProductLabel;
