import {
  Text,
  Box,
  Icon,
  Button,
  Flex,
  Input,
  Link,
  Heading,
  UnorderedList,
  ListItem,
  useToast,
  Stack,
  textDecoration,
  color,
  Checkbox,
  List,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { useState } from "react";

type Props = {};

const TimeModal = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box p={4} borderTop={"1px"} borderColor="gray.200">
      <Text size="sm" mb={4}>
        Chọn thời gian
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack direction={{ base: "column", md: "row" }}>
          <FormControl>
            <FormLabel mt={"-4"}>Ngày giao</FormLabel>
            <Select
              h={"8"}
              id="date"
              placeholder="Hôm nay"
              value={date}
              onChange={(event) => setDate(event.target.value)}>
              <option value="2022-05-15">May 15, 2022</option>
              <option value="2022-05-16">May 16, 2022</option>
              <option value="2022-05-17">May 17, 2022</option>
              <option value="2022-05-18">May 18, 2022</option>
              <option value="2022-05-19">May 19, 2022</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel mt={"-4"}>Thời gian giao</FormLabel>
            <Select
              h={"8"}
              id="time"
              placeholder="12:00 - 17:00"
              value={time}
              onChange={(event) => setTime(event.target.value)}>
              <option value="12:00 - 17:00">12:00 - 17:00</option>
              <option value="17:00 - 21:00">17:00 - 21:00</option>
            </Select>
          </FormControl>
        </Stack>
        <Button
          type="submit"
          mt={4}
          borderRadius={"4"}
          border={"2px"}
          textColor={"#922a8d"}
          backgroundColor={"white"}>
          Xác nhận thời gian
        </Button>
      </form>
    </Box>
  );
};

export default TimeModal;
