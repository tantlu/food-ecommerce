import CustomButton from "@/components/elements/button";
import React, { PropsWithChildren } from "react";

type SearchButtonProps = PropsWithChildren<{
  handleClickSearchBtn?: React.MouseEventHandler<HTMLButtonElement>;
}>;

const SearchButton = ({
  handleClickSearchBtn,
  children,
}: SearchButtonProps) => {
  return (
    <CustomButton
      size="sm"
      py={4}
      bgColor="primary"
      color="white"
      _hover={{ bg: "primary" }}
      fontWeight="normal"
      onClick={handleClickSearchBtn}
      px={1}
    >
      {children}
    </CustomButton>
  );
};

export default SearchButton;
