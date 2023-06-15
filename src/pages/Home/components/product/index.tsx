import { ProductByCategory } from "@/types/product";
import { Box, ChakraStyledOptions } from "@chakra-ui/react";

import ProductLabel from "./components/ProductLabel";
import ProductTabList from "./components/ProductTabList";

type Props = {
  data: ProductByCategory[];
  label: string;
  productBannerUrl: string;
  containerProps?: ChakraStyledOptions;
};

const Product = ({ data, label, productBannerUrl, containerProps }: Props) => {
  return (
    <Box {...containerProps}>
      <ProductLabel>{label}</ProductLabel>

      <ProductTabList data={data} productBannerUrl={productBannerUrl} />
    </Box>
  );
};

export default Product;
