import { ROUTES } from "@/routes";
import { Product } from "@/types/product";
import {
  Box,
  Button,
  Center,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

import { MdAddShoppingCart } from "react-icons/md";

import calculateProductPrice from "@/components/utilites/calculateProductPrice";
import formatCurrency from "@/components/utilites/formatCurrency";
import Link from "../elements/link";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  if (product) {
    return (
      <GridItem key={product.productId} colSpan={1}>
        <Link to={`${ROUTES.PRODUCT}/${product.productId}`}>
          <Box>
            <Image src={product.imageUrl[0]} alt={product.itemName} />
            <Heading color={"second"} as={"h6"} size="md" textAlign={"center"}>
              {product.itemName}
            </Heading>
            <Text
              py={2}
              fontSize="14px"
              textAlign={"center"}
              fontWeight={"bold"}
              color={"#f00"}
            >
              {formatCurrency(calculateProductPrice(product.variants).minPrice)}{" "}
              -{" "}
              {formatCurrency(calculateProductPrice(product.variants).maxPrice)}
            </Text>

            <Center>
              <Box
                as="button"
                p={1}
                border={"1px solid"}
                borderColor={"primary"}
                borderRadius={5}
                color={"primary"}
                fontSize={"13px"}
                fontWeight={"bold"}
                w={"80%"}
                _hover={{ backgroundColor: "primary", color: "#fff" }}
              >
                <Center>
                  <Icon as={MdAddShoppingCart} />
                  Chọn mua
                </Center>
              </Box>
            </Center>
          </Box>
        </Link>
      </GridItem>
    );
  } else {
    return <></>;
  }
};

export default ProductCard;
