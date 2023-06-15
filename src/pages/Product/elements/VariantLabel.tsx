import { Flex, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type variantLabel = PropsWithChildren<{}>;
const VariantLabel = ({ children }: variantLabel) => {
  return (
    <Flex alignItems={"center"} pl={2} width={"15%"}>
      <Text fontWeight={"bold"} fontSize={"14px"}>
        {children}
      </Text>
    </Flex>
  );
};

export default VariantLabel;
