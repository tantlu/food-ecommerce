import React, { useEffect, useState } from "react";
import { PRODUCT_LIST_DATA } from "@/configs/productListData";
import { ROUTES } from "@/routes";
import { Product } from "@/types/product";
import { Flex } from "@chakra-ui/react";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import ImageList from "./components/image-list";
import ProductDetails from "./components/product-details";
import productService from "@/services/productService";
import VarientContext from "@/pages/Product/context/productVariant-context";
import ProductDescribe from "./components/ProductDescribe";
import { getDatabase, onValue, ref } from "firebase/database";

type Props = {};

const Products = ({}: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<null | Product>(null);
  const [variantNumber, setVariantNumber] = useState<number>(0);

  function getData(id: string) {
    let fetchID = Number(id) - 1;
    const db = getDatabase();
    const starCountRef = ref(db, "products/" + `${fetchID}`);
    onValue(starCountRef, (snapshot) => {
      const product = snapshot.val();
      setData(product);
    });
  }
  useEffect(() => {
    if (id) getData(id);
  }, [id]);

  if (data) {
    return (
      <VarientContext.Provider value={{ variantNumber, setVariantNumber }}>
        <Flex maxW={"1300px"} width="100%" m={"0 auto"}>
          <ImageList imageURLs={data.imageUrl} />
          <ProductDetails product={data} />
        </Flex>
        <ProductDescribe product={data} />
      </VarientContext.Provider>
    );
  } else {
    navigate(ROUTES.ERROR_404);
  }
};

export default Products;
