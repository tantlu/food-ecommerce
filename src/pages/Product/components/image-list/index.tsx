import VarientContext from "@/pages/Product/context/productVariant-context";
import { Box, Flex, Image, Link, Square } from "@chakra-ui/react";
import React, { useContext, useState } from "react";

type Props = {
  imageURLs: string[];
};

const ImageList = ({ imageURLs }: Props) => {
  const { variantNumber, setVariantNumber } = useContext(VarientContext);

  return (
    <Flex width={"50%"}>
      <Box position={"sticky"}>
        {imageURLs.map((imageURL, index) => (
          <Square
            onClick={() => setVariantNumber(index)}
            size={"60px"}
            border="1px solid"
            mb={2}
            borderColor={index === variantNumber ? "primary" : "gray.300"}
          >
            <Link>
              <Image src={imageURL} />
            </Link>
          </Square>
        ))}
      </Box>
      <Box>
        <Image src={imageURLs[variantNumber]} />
      </Box>
    </Flex>
  );
};

export default ImageList;
