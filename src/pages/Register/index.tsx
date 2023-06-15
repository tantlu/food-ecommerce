import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
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
} from "@chakra-ui/react";
import { useAppDispatch } from "@/store";
import { auth } from "@/firebase/config";

type Props = {};

const Register = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const Navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== repassword) {
      toast({
        position: "top-right",
        status: "error",
        title: "Đăng ký không thành công",
        description: "Mật khẩu phải trùng khớp",
        isClosable: true,
      });
      return;
    }
    if (password.length < 8) {
      toast({
        position: "top-right",
        status: "error",
        title: "Đăng ký không thành công",
        description: "Password phải dài hơn 8 ký tự",
        isClosable: true,
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        Navigate("/login");
        toast({
          position: "top-right",
          status: "success",
          title: `Đăng ký thành công`,
          isClosable: true,
        });
      })
      .catch((error) => {
        setIsLoading(false);

        const errorCode = error.code;
        let errorMessage = "";

        switch (errorCode) {
          case "auth/invalid-email":
            errorMessage = "Sai định dạng email.";
            break;

          case "auth/email-already-in-use":
            errorMessage = "Email đã được sử dụng bởi người dùng khác.";
            break;
          default:
            errorMessage = "Đã xảy ra lỗi trong quá trình đăng ký.";
            break;
        }

        toast({
          position: "top-right",
          status: "error",
          title: "Đăng ký không thành công",
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
      padding={"5"}
      alignItems={"center"}>
      <Box>
        <Box textAlign={"center"}>
          <NavLink to={"/login"}>
            <Link
              fontSize={"18px"}
              fontWeight={"900"}
              mr={2}
              pr={2}
              color={"grey"}
              borderRight={"1px"}
              _hover={{ textDecoration: "none", color: "third" }}>
              ĐĂNG NHẬP
            </Link>
          </NavLink>
          <NavLink to={"/register"}>
            <Link
              fontSize={"18px"}
              fontWeight={"900"}
              _hover={{ textDecoration: "none" }}>
              ĐĂNG KÝ
            </Link>
          </NavLink>
        </Box>

        <Box mt={5}>
          <form onSubmit={handleSubmit}>
            <Input
              required
              name="phoneNumber"
              type="text"
              mt={2}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              _placeholder={{ fontSize: "13px" }}
              placeholder="Nhập email"
            />

            <Input
              required
              name="password"
              type="password"
              mt={2}
              onChange={(e) => setPassword(e.target.value)}
              _placeholder={{ fontSize: "13px" }}
              placeholder="Nhập mật khẩu"
            />

            <Input
              required
              name="repassword"
              type="password"
              mt={2}
              onChange={(e) => setRePassWord(e.target.value)}
              _placeholder={{ fontSize: "13px" }}
              placeholder="Nhập lại mật khẩu"
            />

            <Button
              type="submit"
              variant={"solid"}
              mt={4}
              backgroundColor={"main"}
              colorScheme={"purple"}
              width={"100%"}
              borderRadius={"20px"}
              fontSize={"13px"}
              textTransform={"uppercase"}>
              Đăng ký
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
