import { User } from "./../../types/user.d";
import React, { useEffect, useState } from "react";
import { ROUTES } from "@/routes";
import { NavLink } from "react-router-dom";
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
import accountService from "@/services/accountService";
import { useAppDispatch } from "@/store";
import { userSliceActions } from "@/store/slices/userSlice";

const phoneRegex = /^(\d{8,12})$/;

type Data = {
  phoneNumber: string;
  password: string;
  repassword: string;
};

type HandleInputChange = (
  key: keyof Data
) => React.ChangeEventHandler<HTMLInputElement>;

export default function useRegister() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repasswordError, setRepasswordError] = useState("");
  const dispatch = useAppDispatch();
  const toast = useToast();

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
        case "repassword":
          setRepassword(value);
          if (value != password) {
            setRepasswordError("Mật khẩu phải trùng nhau");
          } else {
            setRepasswordError("");
          }
          break;
        default:
          break;
      }
    };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(userSliceActions.Register({ phoneNumber, password }));
  }
  return {
    handleSubmit,
    handleInputChange,
    repasswordError,
    phoneError,
    passwordError,
  };
}
