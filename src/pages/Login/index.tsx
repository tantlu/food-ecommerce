import React, { useEffect, useState } from "react";
import { ROUTES } from "@/routes";
import {
  Text,
  Box,
  Button,
  Flex,
  Input,
  Link,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Stack,
  textDecoration,
  color,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import accountService from "@/services/accountService";
import { useAppDispatch } from "@/store";
import { userSliceActions } from "@/store/slices/userSlice";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/config";

type Props = {};

const Login = ({}: Props) => {
  const Navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const provider = new GoogleAuthProvider();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setIsLoading(false);
        toast({
          position: "top-right",
          status: "success",
          title: `Login thành công`,
          isClosable: true,
        });
        Navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        let errorMessage = "";

        switch (errorCode) {
          case "auth/invalid-email":
            errorMessage = "Sai định dạng email.";
            break;
          case "auth/user-not-found":
            errorMessage = "Tài khoản này không tồn tại.";
            break;
          case "auth/wrong-password":
            errorMessage = "Sai email hoặc mật khẩu.";
            break;
          default:
            break;
        }

        toast({
          position: "top-right",
          status: "error",
          title: "Login không thành công",
          description: errorMessage,
          isClosable: true,
        });
      });
  };

  return (
    <Box
      m="auto"
      width="50%"
      height="440px"
      bg={"white"}
      rounded={"md"}
      left={"20px"}
      top={10}
      padding={"5"}>
      <Box textAlign={"center"}>
        <NavLink to={"/login"}>
          <Link
            fontSize={"18px"}
            fontWeight={"600"}
            mr={2}
            pr={2}
            borderRight={"1px"}
            fontStyle={"bold"}
            _hover={{ textDecoration: "none" }}>
            ĐĂNG NHẬP
          </Link>
        </NavLink>

        <NavLink to={"/register"}>
          <Link
            color={"grey"}
            fontSize={"18px"}
            fontWeight={"900"}
            _hover={{ textDecoration: "none", color: "third" }}>
            ĐĂNG KÝ
          </Link>
        </NavLink>
      </Box>

      <Box mt={5}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <Input
                value={email}
                type="text"
                _placeholder={{ fontSize: "13px" }}
                placeholder="Vui lòng nhập mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <Input
              type="password"
              value={password}
              mt={2}
              _placeholder={{ fontSize: "13px" }}
              placeholder="Vui lòng nhập mật khẩu của bạn"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Text pt={2} fontSize={"13px"} color={"gray.600"}>
            This site is protected by reCAPTCHA and the Google{" "}
            <Text color={"main"} as={"span"}>
              <Link color={"blue"} href="#">
                Privacy Policy
              </Link>{" "}
            </Text>
            and{" "}
            <Link href="#" color={"blue"}>
              Terms of Service
            </Link>{" "}
            apply.
          </Text>
          <Box>
            <Button
              type="submit"
              variant={"solid"}
              mt={4}
              backgroundColor={"main"}
              colorScheme={"purple"}
              width={"20%"}
              borderRadius={"5px"}
              fontSize={"13px"}
              float={"left"}
              mr={10}>
              Đăng nhập
            </Button>
            <Flex pt={4} fontSize={"12px"}></Flex>
            <Flex pt={2} fontSize={"12px"}>
              <Text color={"gray.500"}>Bạn đã quên mật khẩu?</Text>{" "}
              <Link href="#" as="a" color={"main"} textDecoration={"none"}>
                Khôi phục mật khẩu
              </Link>
            </Flex>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
