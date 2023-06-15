import { getUserState, useAppSelector } from "@/store";
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
} from "@chakra-ui/react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { auth } from "@/firebase/config";

const LoginModal = () => {
  const toast = useToast();
  const Navigate = useNavigate();
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
        console.log(user);
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

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        Navigate("/");
      })
      .catch((error) => {
        return;
      });
  };
  return (
    <Box
      width="120%"
      height="440px"
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"md"}
      position="absolute"
      left={"20px"}
      top={10}
      zIndex="10"
      padding={"5"}>
      <Box textAlign={"center"}>
        <Heading as="h6" fontSize={"18px"}>
          ĐĂNG NHẬP TÀI KHOẢN
        </Heading>
        <Text pt={2} fontSize={"14px"} color="gray.600">
          Nhập email và mật khẩu của bạn:
        </Text>
      </Box>

      <Box mt={5}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="phoneNumber" isRequired>
              <Input
                type="tel"
                _placeholder={{ fontSize: "13px" }}
                placeholder="Tài khoản của bạn"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <Input
              type="password"
              mt={2}
              _placeholder={{ fontSize: "13px" }}
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Text pt={2} fontSize={"13px"} color={"gray.600"}>
            This site is protected by reCAPTCHA and the Google{" "}
            <Text color={"main"} as={"span"}>
              <Link href="#">Privacy Policy</Link>{" "}
            </Text>
            and{" "}
            <Link href="#" color={"main"}>
              Terms of Service
            </Link>{" "}
            apply.
          </Text>

          <Button
            type="submit"
            variant={"solid"}
            mt={4}
            backgroundColor={"main"}
            colorScheme={"purple"}
            width={"100%"}
            borderRadius={"20px"}
            fontSize={"13px"}>
            Đăng nhập
          </Button>

          <Flex mt={3} gap={1}>
            <Button
              width={"50%"}
              colorScheme="facebook"
              borderRadius={"20px"}
              leftIcon={<FaFacebook />}
              fontSize={"13px"}>
              Facebook
            </Button>
            <Button
              onClick={signInWithGoogle}
              width={"50%"}
              colorScheme="red"
              borderRadius={"20px"}
              leftIcon={<IoLogoGoogleplus />}
              fontSize={"13px"}>
              Google
            </Button>
          </Flex>

          <Flex pt={5} fontSize={"12px"}>
            <Text color={"gray.500"}>Khách hàng mới?</Text>
            <Link
              href="/register"
              as="a"
              color={"main"}
              textDecoration={"none"}>
              {" "}
              Tạo tài khoản
            </Link>
          </Flex>
          <Flex pt={2} fontSize={"12px"}>
            <Text color={"gray.500"}>Quên mật khẩu?</Text>{" "}
            <Link href="#" as="a" color={"main"} textDecoration={"none"}>
              Khôi phục mật khẩu
            </Link>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default LoginModal;
