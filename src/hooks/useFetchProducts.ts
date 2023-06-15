import { Product } from "@/types/product";
import { useToast } from "@chakra-ui/react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useFetchProducts() {
  const [productsData, setproductsData] = useState<Product[]>([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const db = getDatabase();
    const starCountRef = ref(db, "products/");
    onValue(starCountRef, (snapshot) => {
      setproductsData(snapshot.val());
    });
  }

  return { productsData };
}
