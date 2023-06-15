import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import CustomButton from "@/components/elements/button";
import { useState } from "react";
import SearchButton from "./SearchButton";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "@/store/slices/productSlice";
import { FILTER_BY_SEARCH } from "@/store/slices/filterSlice";

const Search = () => {
  const [enterValue, setEnterValue] = useState<string>("");
  const dispatch = useDispatch();
  const products = useSelector(selectedProducts);
  const handleSearchProducts = () => {
    dispatch(FILTER_BY_SEARCH({ products: products, search: enterValue }));
  };
  return (
    <InputGroup maxWidth="630px">
      <Input
        focusBorderColor="primary"
        variant="outline"
        placeholder="Bạn đang tìm kiếm gì?"
        value={enterValue}
        onChange={(e) => setEnterValue(e.target.value)}
      />
      ;
      <InputRightElement
        w="50"
        pr={1}
        children={
          <SearchButton handleClickSearchBtn={handleSearchProducts}>
            Tìm kiếm
          </SearchButton>
        }
      />
    </InputGroup>
  );
};

export default Search;
