import React, { PropsWithChildren } from "react";
import { GridItem, Heading } from "@chakra-ui/react";

type CustomGridItemProps = PropsWithChildren<{ headingText: string }>;

const CustomGridItem = ({ headingText, children }: CustomGridItemProps) => {
  return (
    <GridItem w="100%">
      <Heading
        as="h4"
        fontFamily="Quicksand"
        fontWeight="650"
        fontSize="18px"
        color="third"
        mb={5}
      >
        {headingText}
      </Heading>
      {children}
    </GridItem>
  );
};

export default CustomGridItem;
