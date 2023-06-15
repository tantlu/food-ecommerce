import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Logo from "@/components/elements/logo";
import Cart from "./components/cart";
import Login from "./components/login";
import NavMenu from "./components/nav-menu";
import Search from "./components/search";

export default function Header() {
  return (
    <Box maxW="1300px" m="0 auto">
      <Flex
        borderBottom="1px solid"
        borderColor="gray.300"
        justifyContent="space-between"
        color="primary"
        py={5}
      >
        {/* header_left_logo */}
        <Center>
          <Logo
            alt="header_logo"
            source={"/assets/images/logo/kleverfood_logo.webp"}
          />
        </Center>
        {/* header_right */}
        <Box width="100%" pl={10}>
          <Flex width="100%" pt={1}>
            {/* search */}
            <Search />
            <Flex>
              {/* login */}
              <Login />
              {/* cart */}
              <Cart />
            </Flex>
          </Flex>
          {/* header_Text */}
          <Box>
            <Text fontSize="17px" pt={2}>
              Công ty đầu tiên và duy nhất tại Việt Nam hoàn tiền và đổi trả
              hàng
              <Text mx={1} as="b">
                KHÔNG LÝ DO
              </Text>
              trong vòng 48h
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* nav_menu */}
      <NavMenu />
    </Box>
  );
}
