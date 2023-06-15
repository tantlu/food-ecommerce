import { Product } from "@/types/product";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { PropsWithChildren, useContext, useState } from "react";
import ProductVarient from "./ProductVarient";
import VariantLabel from "../../elements/VariantLabel";
import VarientContext from "@/pages/Product/context/productVariant-context";
import CustomButton from "./CustomButton";

type Props = {
  product: Product;
};

type ProductCountButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

const ProductCountButton = ({ children, onClick }: ProductCountButtonProps) => {
  return (
    <Button
      color="gray.500"
      borderRadius={"none"}
      borderColor={"#f3f4f4"}
      _hover={{ color: "#000" }}
      variant={"outline"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const ProductDetails = ({ product }: Props) => {
  const { itemName, slug, vendor, variants } = product;

  const [productCount, setProductCount] = useState<number>(0);
  const { variantNumber } = useContext(VarientContext);

  return (
    <Box position={"sticky"} width={"50%"}>
      <Heading as={"h1"} fontSize={"24px"} color={"#333"} fontWeight={"700"}>
        {itemName}
      </Heading>
      <Flex fontSize={"14px"}>
        <Text p={2} pl={0}>
          Mã sản phẩm:{" "}
          <Text color={"primary"} fontWeight={"700"} as={"span"}>
            {slug}-{variantNumber + 1}
          </Text>
        </Text>
        <Text p={2}>
          Tình trạng:
          <Text color={"primary"} fontWeight={"700"} as={"span"}>
            {variants[variantNumber].status === 1 ? " Còn hàng" : " Hết hàng"}
          </Text>
        </Text>
        <Text p={2}>
          Thương hiệu:{" "}
          <Text color={"primary"} fontWeight={"700"} as={"span"}>
            {vendor}
          </Text>
        </Text>
      </Flex>

      {/* product variants  */}
      {typeof variants !== "undefined" && (
        <ProductVarient variants={variants} />
      )}

      {/* product quantity count  */}
      <Flex py={5}>
        <VariantLabel>Số lượng: </VariantLabel>
        <Flex>
          <ProductCountButton
            onClick={() => {
              if (productCount > 0) {
                setProductCount((count) => count - 1);
              }
            }}
          >
            -
          </ProductCountButton>
          <Flex alignItems={"center"}>
            <Input
              width={"45px"}
              textAlign={"center"}
              height={"100%"}
              variant={"unstyled"}
              borderRadius={"none"}
              border={"1px solid"}
              borderColor={"#f3f4f4"}
              fontSize={"12px"}
              fontWeight={"bold"}
              type="number"
              defaultValue={1}
              value={productCount}
              onChange={(e) => setProductCount(Number(e.target.value))}
            />
          </Flex>
          <ProductCountButton
            onClick={() => setProductCount((count) => count + 1)}
          >
            +
          </ProductCountButton>
        </Flex>
      </Flex>
      <Flex rowGap={4} justifyContent={"space-between"}>
        <CustomButton
          variant={"outline"}
          fontSize={"14px"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          _hover={{ bgColor: "primary", color: "#fff" }}
          color="primary"
          borderColor={"primary"}
          width={"100%"}
          onClick={() => {}}
        >
          Thêm vào giỏ
        </CustomButton>
        <CustomButton
          variant={"outline"}
          fontSize={"14px"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          _hover={{}}
          color="#fff"
          border={"1px solid #f00"}
          bgColor={"#f00"}
          width={"100%"}
          onClick={() => {}}
        >
          Mua ngay
        </CustomButton>
      </Flex>
    </Box>
  );
};

export default ProductDetails;
