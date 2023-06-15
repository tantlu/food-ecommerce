import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{ title: string }>;

const ProductOptionMenu = ({ title, children }: Props) => {
  return (
    <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
      <AccordionItem>
        <AccordionButton border={"1px solid"} borderColor={"gray.100"}>
          <Box
            fontSize={"14px"}
            fontWeight={"bold"}
            as="span"
            flex="1"
            textAlign="left"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel border={"1px solid"} borderColor={"gray.100"}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductOptionMenu;
