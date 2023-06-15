import {
  Icon,
  Text,
  Box,
  Button,
  Flex,
  Center,
  useToast,
} from "@chakra-ui/react";
import { IoPersonOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import React, { useContext, useMemo, useState } from "react";
import LoginModal from "./LoginModal";
import { getUserState, useAppDispatch, useAppSelector } from "@/store";
import { userSliceActions } from "@/store/slices/userSlice";
import { signOut, updateProfile } from "firebase/auth";
import { Link, NavLink, Navigate } from "react-router-dom";
import { auth } from "@/firebase/config";

type LoginProps = {};

const Login = (props: LoginProps) => {
  const toast = useToast();
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const [isModalDisplay, setIsModalDisplay] = useState<boolean>(false);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLogout(true);
        toast({
          position: "top-right",
          status: "success",
          title: `Đăng xuất thành công`,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const user = auth.currentUser;
  const userName = user?.email?.split("@")[0];

  const displayname = userName;
  return (
    <Box position="relative">
      <Button
        onMouseLeave={() => setIsModalDisplay(isModalDisplay)}
        onMouseEnter={() => setIsModalDisplay(!isModalDisplay)}
        fontWeight="350"
        ml={20}
        variant="unstyled">
        <Flex>
          <Center pr={3}>
            <Icon as={IoPersonOutline} boxSize={7} />
          </Center>
          {!user && (
            <Flex flexDirection="column" fontSize="14px" textAlign="left">
              <Text>Đăng nhập / Đăng ký</Text>

              <Flex>
                <Text>Tài khoản của tôi</Text>
                <Center pr={1} pt={1}>
                  <Icon as={BsChevronDown} boxSize={4} pl={1} />
                </Center>
              </Flex>
            </Flex>
          )}
          {user && (
            <>
              <Button variant="unstyled">
                <NavLink to={"/infor"}>Hi, {displayname}</NavLink>
              </Button>
              <Button
                onClick={handleLogout}
                fontWeight="350"
                ml={10}
                variant="unstyled">
                Đăng xuất
              </Button>
            </>
          )}
        </Flex>
      </Button>
      {!user && isModalDisplay && <LoginModal />}
    </Box>
  );
};

export default Login;
