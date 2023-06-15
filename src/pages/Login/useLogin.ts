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
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { NavLink } from "react-router-dom";
import accountService from "@/services/accountService";
import { useAppDispatch } from "@/store";
import { userSliceActions } from "@/store/slices/userSlice";

const phoneRegex = /^(\+?84|0)(1\d{9}|3\d{8}|5\d{8}|7\d{8}|8\d{8}|9\d{8})$/;

type Data = {
  phoneNumber: string;
  password: string;
};

type HandleInputChange = (
  key: keyof Data
) => React.ChangeEventHandler<HTMLInputElement>;

export default function useLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const dispatch = useAppDispatch();

  const handleInputChange: HandleInputChange =
    (key): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const { value } = e.target;
      switch (key) {
        case "phoneNumber":
          setPhoneNumber(value);
          if (!phoneRegex.test(value)) {
            setPhoneError("Số điện thoại không hợp lệ");
          } else {
            setPhoneError("");
          }
          break;
        case "password":
          setPassword(value);
          if (value.length < 8) {
            setPasswordError("Mật khẩu phải chứa ít nhất 8 ký tự");
          } else {
            setPasswordError("");
          }
          break;
        default:
          break;
      }
    };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // if (isSubmitting) return;

    dispatch(userSliceActions.Login({ phoneNumber, password }));

    // setIsSubmitting(true);

    // try {
    //   const data = await accountService.login({ phoneNumber, password });
    //   dispatch(userSliceActions.addToken(data.access_token));

    //   const account = await accountService.getAccount();
    //   dispatch(userSliceActions.addUserData(account));
    //   console.log(account);

    //   setIsSubmitting(false);
    // } catch (error) {
    //   console.log(error);

    //   setIsSubmitting(false);
    //   toast({
    //     title: "An error occurred",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    // }
  }
  return {
    handleSubmit,
    handleInputChange,
  };
}
