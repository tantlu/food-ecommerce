import { useState } from "react";
import { ListItem, Link, Box, Text, Grid } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavItemUnit } from "@/types/navItemUnit";
import SubNavItem from "./sub-nav/SubNavItem";
import { NAV_LIST_DATA } from "@/configs/navListData";

type NavItemProps = {
  data: NavItemUnit;
};

const NavItem = ({ data }: NavItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const navItems = data.children;
  console.log(data);

  return (
    <ListItem
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
    >
      <Link
        display="block"
        width={"100%"}
        color="primary"
        fontWeight="extrabold"
        letterSpacing="0.75px"
        href={data.url}
        fontSize={14}
        py={15}
        position="relative"
        _after={{
          content: '""',
          display: "block",
          height: "2px",
          width: "0",
          bgColor: "primary",
          position: "absolute",
          bottom: 0,
          opacity: 0,
          left: 0,
          transition: "all .5s ",
        }}
        _hover={{
          textDecoration: "none",
          _after: {
            width: "100%",
            opacity: 1,
          },
        }}
      >
        {data.label}

        <ChevronDownIcon
          transform={isHovering ? "rotate(180deg)" : ""}
          transition="all 0.3s ease"
          boxSize={5}
        />
      </Link>
      {/* sub-menu */}
      <Box
        backgroundColor={"white"}
        boxShadow="xs"
        p={"10px 10px"}
        position={"absolute"}
        zIndex={1}
        gridAutoFlow={"column dense"}
        display={isHovering ? "grid" : "none"}
        width={"100%"}
        _hover={{
          textDecoration: "none",
          _after: {
            width: "100%",
            opacity: 1,
          },
        }}
      >
        {navItems?.map((item, index) => (
          <SubNavItem key={item.label} data={item} index={index} />
        ))}
      </Box>
    </ListItem>
  );
};
export default NavItem;
