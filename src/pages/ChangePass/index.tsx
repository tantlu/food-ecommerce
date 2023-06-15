import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { getAuth, updatePassword } from "firebase/auth";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Password mới và Repassword không trùng nhau",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        position: "top-right",
        status: "error",
        title: "Thay đổi không thành công",
        description: "Password mới phải dài hơn 8 ký tự",
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    const auth = getAuth();
    const user = auth.currentUser;

    try {
      await updatePassword(user, newPassword);

      toast({
        position: "top-right",

        title: "Thành công",
        description: "Password đã được thay đổi.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast({
        position: "top-right",
        title: "Error",
        description: "Password chưa được thay đổi.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <FormControl id="currentPassword" mb={4}>
          <FormLabel>Password hiện tại</FormLabel>
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="newPassword" mb={4}>
          <FormLabel>Password mới</FormLabel>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormControl>
        <FormControl id="confirmPassword" mb={4}>
          <FormLabel>Xác nhận Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          isLoading={isSubmitting}
          loadingText="Changing Password"
          width="full">
          Change Password
        </Button>
      </form>
    </Box>
  );
};

export default ChangePasswordForm;
