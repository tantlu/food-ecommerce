import {
  Box,
  Center,
  Checkbox,
  Flex,
  Image,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductOptionMenu from "./elements/ProductOptionMenu";
import { PRODUCT_OPTION_LIST_DATA } from "@/configs/productOptionsData";
import ProductMainList from "./components/product-main-list";
import { Product } from "@/types/product";
import {
  getDatabase,
  ref,
  query,
  startAt,
  endAt,
  get,
  onValue,
  limitToFirst,
  orderByKey,
} from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCTS, selectedProducts } from "@/store/slices/productSlice";
import useFetchProducts from "@/hooks/useFetchProducts";

const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);
  const [limitNo, setLimitNo] = useState(6);
  const [hideButton, setHideButton] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useToast();
  const { productsData } = useFetchProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(STORE_PRODUCTS({ products: productsData }));
  }, [productsData]);

  useEffect(() => {}, []);

  useEffect(() => {
    fetchData();
  }, [limitNo]);

  //fetch data with limit items and click button to fetch more
  const fetchData = () => {
    setIsLoading(true);
    try {
      const db = getDatabase();
      const q = query(ref(db, "products"), orderByKey(), limitToFirst(limitNo));

      get(q)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setData(snapshot.val());
            setIsLoading(false);
          } else {
            setIsLoading(false);
            toast({
              title: "No products were found.",
              description: "Please check your request!",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
    }
  };

  const displayMoreProducts = () => {
    setLimitNo((pre) => pre + 6);
  };

  return (
    <Flex m={"0 auto"} width={"100%"} maxWidth={"1300px"}>
      {/* product  filter option */}
      <Box width="20%">
        {PRODUCT_OPTION_LIST_DATA.map((item) => {
          if (item.label === "Danh mục sản phẩm") {
            return (
              <ProductOptionMenu key={item.label} title={item.label}>
                {item.options.map((option) => (
                  <Box
                    px="3"
                    py="1"
                    listStyleType={"none"}
                    as="li"
                    key={option.name}
                  >
                    <Link
                      fontSize={13}
                      textDecorationLine={"none"}
                      onClick={() => {}}
                    >
                      {option.name}
                    </Link>
                  </Box>
                ))}
              </ProductOptionMenu>
            );
          } else {
            return (
              <Box mt={5}>
                <ProductOptionMenu key={item.label} title={item.label}>
                  {item.options.map((option) => (
                    <Box
                      width={"100%"}
                      px="3"
                      py="1"
                      as="li"
                      listStyleType={"none"}
                      key={option.name}
                    >
                      <Checkbox checked={option.checked}>
                        <Center>
                          <Text fontSize={13} as="span">
                            {option.name}
                          </Text>
                        </Center>
                      </Checkbox>
                    </Box>
                  ))}
                </ProductOptionMenu>
              </Box>
            );
          }
        })}
      </Box>
      {/* product main list */}

      {isLoading ? (
        <Center>
          <Image src="/assets/images/spinner.jpg" alt="Loading..." w={"30%"} />
        </Center>
      ) : (
        <ProductMainList
          isDisplay={hideButton}
          products={data}
          displayMoreProducts={displayMoreProducts}
        />
      )}
    </Flex>
  );
};

export default ProductList;
