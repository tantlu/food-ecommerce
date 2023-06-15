import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/layouts";
import ProductFilterBox from "./ProductFilterBox";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_PRODUCT_BY_OPTIONS,
  selectedFilter,
} from "@/store/slices/filterSlice";
import { selectedProducts } from "@/store/slices/productSlice";

type Props = {
  products: Product[];
  displayMoreProducts: () => void;
  isDisplay: boolean;
};

const ProductMainList = ({
  products,
  displayMoreProducts,
  isDisplay,
}: Props) => {
  const [sort, setSort] = useState<string>("");

  const dispatch = useDispatch();
  const productList = useSelector(selectedProducts);
  const filteredData = useSelector(selectedFilter);
  useEffect(() => {
    dispatch(
      FILTER_PRODUCT_BY_OPTIONS({ products: productList, option: sort })
    );
  }, [sort]);

  return (
    <Box w={"80%"} pl={5}>
      <Image src={"/assets/images/products/collection_banner.webp"} />

      <Box mt={5}>
        {/* product main list heading  */}
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Heading alignSelf={"center"} as="h6" size={"md"}>
              Sản phẩm
            </Heading>

            <Text
              alignSelf={"center"}
              ml={10}
              fontSize={13}
              fontWeight={"bold"}
            >
              {products ? ` ${products.length} sản phẩm` : "Không có sản phẩm"}
            </Text>
          </Flex>

          {/* filter product option box */}

          <ProductFilterBox
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          />
        </Flex>

        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {sort
            ? filteredData.map((product: any) => (
                <ProductCard key={product.productId} product={product} />
              ))
            : products.map((product) => (
                <ProductCard key={product.productId} product={product} />
              ))}
        </Grid>

        <Center mt={5}>
          <Box
            as="button"
            py={2}
            border={"1px solid"}
            borderColor={"primary"}
            borderRadius={5}
            color={"primary"}
            fontSize={"14px"}
            fontWeight={"bold"}
            w={"30%"}
            _hover={{ backgroundColor: "primary", color: "#fff" }}
            onClick={displayMoreProducts}
          >
            Xem thêm sản phẩm
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default ProductMainList;
