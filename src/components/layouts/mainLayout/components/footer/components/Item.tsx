import React, { CSSProperties, PropsWithChildren } from "react";
import { ListItem, Link } from "@chakra-ui/react";

type ItemProps = PropsWithChildren<{ text: any }>;

const Item = ({ children, text }: ItemProps) => {
  return (
    <ListItem>
      <Link title={text} href="#" _hover={{ color: "primary" }}>
        {children}
      </Link>
    </ListItem>
  );
};

export default Item;
