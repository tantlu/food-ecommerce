import { chakra, ChakraStyledOptions, UnorderedList } from "@chakra-ui/react";
import { CSSProperties, PropsWithChildren } from "react";
const Nav = chakra("nav");

type NavListProps = {
  children: any;
  customStyle: CSSProperties;
};

const NavList = ({ children, customStyle }: NavListProps) => {
  return (
    <Nav>
      <UnorderedList
        justifyContent="space-around"
        listStyleType="none"
        display="flex"
        style={customStyle}
      >
        {children}
      </UnorderedList>
    </Nav>
  );
};

export default NavList;
