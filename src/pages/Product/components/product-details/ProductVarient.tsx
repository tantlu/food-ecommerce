import { ProductVariant } from "@/types/product";
import { Box, ButtonGroup, Flex, Text } from "@chakra-ui/react";

import VariantLabel from "../../elements/VariantLabel";
import { useContext } from "react";
import VarientContext from "@/pages/Product/context/productVariant-context";
import CustomButton from "./CustomButton";
import calculateProductPrice from "@/components/utilites/calculateProductPrice";

type variantsProps = {
  variants: ProductVariant[];
};

const ProductVarient = ({ variants }: variantsProps) => {
  const { variantNumber, setVariantNumber } = useContext(VarientContext);

  let price;
  let selectedVariant = variants[variantNumber];

  if (selectedVariant.discountPercent) {
    price =
      selectedVariant.originalPrice -
      (selectedVariant.originalPrice * selectedVariant.discountPercent) / 100;
  } else {
    price = selectedVariant.originalPrice;
  }
 

  return (
    <Box width={"100%"} color={"second"}>
      {/* price */}
      <Flex width={"100%"} bgColor={"#fafafa"} py={4}>
        <VariantLabel>Giá:</VariantLabel>

        <Flex width={"85%"}>
          <Text
            mr={5}
            as={"span"}
            fontSize={"28px"}
            fontWeight={"700"}
            color={"#f00"}
          >
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </Text>

          {selectedVariant.discountPercent && (
            <Text
              mr={5}
              as={"span"}
              fontSize={"18px"}
              textDecoration={"line-through"}
              color={"gray.400"}
              alignSelf={"center"}
            >
              {selectedVariant.originalPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </Text>
          )}

          {selectedVariant.discountPercent && (
            <Text
              px={3}
              py={1}
              borderRadius={"5px"}
              borderColor="#f00"
              color="#f00"
              fontWeight={"bold"}
              border={"1px solid"}
              as={"span"}
              fontSize={"12px"}
              alignSelf={"center"}
            >
              -{selectedVariant.discountPercent}%
            </Text>
          )}
        </Flex>
      </Flex>

      {/* dimension */}
      <Flex width={"100%"} py={2}>
        <VariantLabel>Hộp:</VariantLabel>

        <ButtonGroup flexWrap={"wrap"} variant={"outline"} width={"85%"}>
          {variants.map((variant, index) => (
            <CustomButton
              key={variant.variantID}
              borderColor={variantNumber === index ? "primary" : "gray.300"}
              onClick={() => setVariantNumber(variant.variantID - 1)}
            >
              {variant.sizeBox || variant.quantity}
            </CustomButton>
          ))}
        </ButtonGroup>
      </Flex>

      <Flex width={"100%"} py={2}>
        <VariantLabel>Kích thước: </VariantLabel>
        <ButtonGroup flexWrap={"wrap"} variant={"outline"} width={"85%"}>
          {variants.map((variant, index) => (
            <CustomButton
              key={variant.variantID}
              borderColor={variantNumber === index ? "primary" : "gray.300"}
              onClick={() => setVariantNumber(variant.variantID - 1)}
            >
              {variant.dimension}
            </CustomButton>
          ))}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default ProductVarient;
