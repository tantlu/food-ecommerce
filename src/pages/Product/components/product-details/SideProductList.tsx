import ProductNavigation from "@/components/elements/product-navigation";
import { PRODUCT_LIST_DATA } from "@/configs/productListData";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SideProductList = (props: Props) => {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Heading as={"h3"}>Có thể bạn sẽ thích</Heading>
        <ProductNavigation
          handleNavigateLeft={() => {}}
          handleNavigateRight={() => {}}
        />
      </Flex>
    </>
  );
};

export default SideProductList;
