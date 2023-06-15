import { NavItemUnit } from "@/types/navItemUnit";
import { ListItem, Link, Box, Text, Grid, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
type SubNavItemProps = {
  data: NavItemUnit;
  index: number;
};
export default function SubNavItem({ data }: SubNavItemProps) {
  const navItems = data.children;
  return (
    <Box>
      <ListItem
        borderBottom="1px"
        borderColor="gray.200"
        display={"inline"}
        fontWeight={"bold"}
        width={"100%"}
        color="third"
        letterSpacing="0.75px"
        fontSize={14}
        position="relative"
      >
        <Link
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
              opacity: 1,
            },
          }}
        >
          {data.label}
        </Link>
      </ListItem>

      {navItems?.map((item, index) => (
        <Link
          borderBottom="1px"
          borderColor="gray.200"
          key={index}
          width={"100%"}
          color="third"
          letterSpacing="0.75px"
          href={data.url}
          fontSize={14}
          position="relative"
          _after={{
            content: '""',
            display: "block",
            height: "1px",
            width: "0",
            bgColor: "primary",
            position: "relative",
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
          <Text>{item.label}</Text>
        </Link>
      ))}
    </Box>
  );
}
