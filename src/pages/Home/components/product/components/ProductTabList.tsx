import { useEffect, useState } from "react";
import {
  Icon,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { Product, ProductByCategory } from "@/types/product";
import NavList from "@/components/elements/nav-list";
import { ROUTES } from "@/routes";
import Link from "@/components/elements/link";
import { log } from "console";
import { getDatabase, onValue, ref } from "firebase/database";
import { useDispatch } from "react-redux";
import { addToCart, cartSliceActions } from "@/store/slices/cartSlide";
import { AppDispatch } from "@/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import formatCurrency from "@/components/utilites/formatCurrency";
import calculateProductPrice from "@/components/utilites/calculateProductPrice";

type Props = {
  data: ProductByCategory[];
  productBannerUrl: string;
};

const ProductTabList = ({ data, productBannerUrl }: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    const db = getDatabase();
    const productRef = ref(db, "products");
    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productArray: Product[] = Object.values(data);
        setProducts(productArray.slice(0, 6));
      }
    });
    return () => {
      onValue(productRef, null);
    };
  }, []);

  const handleAddToCart = (productId: number) => {
    dispatch(cartSliceActions.addToCart({ productId }));
    console.log(productId);
  };

  return (
    <Box>
      {/* tab list */}
      <NavList customStyle={{ marginTop: "5px" }}>
        {data.map((tab, index) => (
          <Box
            p={3}
            mx={3}
            as="li"
            bgColor={index === tabIndex ? "primary" : ""}
            color={index === tabIndex ? "white" : ""}
            cursor={"pointer"}
            onClick={() => {
              setTabIndex(index);
            }}
            key={tab.id}>
            <Center pb={2}>
              <Image src={tab.categoryIconUrl} alt={tab.categoryName} />
            </Center>
            <Text>{tab.categoryName}</Text>
          </Box>
        ))}
      </NavList>

      {/* tab content */}
      <Grid
        h={"100%"}
        pt={5}
        gap={5}
        templateRows={"repeat(2, 1fr)"}
        templateColumns="repeat(4,1fr)">
        <GridItem rowSpan={2} colSpan={1}>
          <Link to={"#"}>
            <Image src={productBannerUrl} />
          </Link>
        </GridItem>

        {products?.map((product) => (
          <GridItem key={product.productId} colSpan={1}>
            <Link to={`${ROUTES.PRODUCT}/${product.productId}`} display="block">
              <Box textAlign={"center"}>
                <Image src={product.imageUrl[0]} alt={product.itemName} />
                <Heading as={"h6"} size="19px" textAlign={"center"}>
                  {product.itemName}
                </Heading>
                <Text
                  py={2}
                  fontSize="14px"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color={"#f00"}>
                  {formatCurrency(
                    calculateProductPrice(product.variants).minPrice
                  )}{" "}
                  -{" "}
                  {formatCurrency(
                    calculateProductPrice(product.variants).maxPrice
                  )}
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
                    onClick={() => handleAddToCart(product.productId)}
                    w={"80%"}
                    _hover={{ backgroundColor: "primary", color: "#fff" }}>
                    <Center>
                      <Icon as={MdAddShoppingCart} />
                      Chọn mua
                    </Center>
                  </Box>
                </Center>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
      {/* dynamic tab content button */}
      <Center>
        <Button as={Link} to={`${ROUTES.PRODUCTLIST}`}>
          Xem tất cả
          {/* {productBtnName} */}
        </Button>
      </Center>
    </Box>
  );
};

export default ProductTabList;
