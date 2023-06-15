import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, set } from "firebase/database";
import app from "@/firebase/config";
import db from "@/firebase/config";

interface FormData {
  userId: string;
  name: string;
  email: string;
  imageUrl: string;
}

interface listUser {
  id: string | null;
  username: string;
  email: string;
}
const TestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    name: "",
    email: "",
    imageUrl: "",
  });

  const [listUser, setListUser] = useState<listUser[]>([]);

  function writeUserData(
    userId: string,
    name: string,
    email: string,
    imageUrl: string
  ) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  useEffect(() => {
    app;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    writeUserData(
      formData.userId,
      formData.name,
      formData.email,
      formData.imageUrl
    );
  };

  const handleGetData = () => {
    const db = getDatabase();
    const user = ref(db, "users/");
    onValue(user, (snapshot) => {
      let arr: listUser[] = [];
      snapshot.forEach((childSnapshot) => {
        let childData = childSnapshot.val();
        arr.push({
          id: childSnapshot.key,
          username: childData.username,
          email: childData.email,
        });
      });
      setListUser(arr);
    });
  };

  return (
    <Box maxW={"1300px"} w={"30%"} m={"0 auto"} textAlign={"center"}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>UserId: </FormLabel>
          <Input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>User's Image URL</FormLabel>
          <Input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          marginTop={5}
          width={"50%"}
          type="submit"
          mt={4}
          colorScheme="teal"
        >
          Submit
        </Button>
      </form>

      <Button
        marginTop={5}
        width={"50%"}
        onClick={handleGetData}
        mt={4}
        colorScheme="teal"
      >
        Get Data
      </Button>

      <Box>
        {listUser.map((user) => (
          <Text>{user.username}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default TestForm;
