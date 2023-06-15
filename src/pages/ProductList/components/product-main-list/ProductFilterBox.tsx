import React, { useState } from "react";
import { Box, Center, Flex, Text, Icon, Select } from "@chakra-ui/react";

const sortOptions = [
  "Sắp xếp",
  "Giá thấp nhất",
  "Giá cao nhất",
  "Tên: A - Z",
  "Tên: Z - A",
];
type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const ProductFilterBox = ({ value, onChange }: Props) => {
  return (
    <Box>
      <Select width={"100%"} value={value} onChange={onChange}>
        {sortOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </Box>
  );
};

export default ProductFilterBox;
