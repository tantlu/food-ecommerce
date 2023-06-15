import {
  Text,
  Box,
  Icon,
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
  Checkbox,
  List,
  Table,
  Th,
  Tr,
  Thead,
  Tbody,
  Td,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Checkout = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (selectedOption === "option2") {
      setPhoneNumber("");
      setFullName("");
    }
  }, [selectedOption]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setPhoneNumber("");
    setFullName("");
  };
  return (
    <Flex
      maxW={"1300px"}
      m={"auto"}
      flexDirection="column"
      alignItems={"center"}>
      <Text as={"b"} fontSize={"3xl"}>
        Thông tin giao hàng
      </Text>

      {/* chỗ này để thêm user và nút đăng xuất */}

      <Box textAlign={"center"} left={"20px"} w={"60%"}>
        <Select value={selectedOption} onChange={handleChange}>
          <option value="option1">Địa chỉ đã lưu trữ</option>
          <option value="option2">Thêm địa chỉ mới</option>
        </Select>
        <Stack spacing={4}>
          <FormControl id="fullName" isRequired>
            <Input
              w={"100%"}
              mt={2}
              type="text"
              _placeholder={{ fontSize: "13px" }}
              placeholder="Vui lòng nhập họ và tên"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </FormControl>
        </Stack>

        <FormControl id="phoneNumber" isRequired>
          <Input
            type="tel"
            mt={2}
            _placeholder={{ fontSize: "13px" }}
            placeholder="Vui lòng nhập số điện thoại"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </FormControl>
      </Box>
      <Box w={"60%"} border="1px" borderColor="gray.200" m={"5"} p={"5"}>
        <FormControl>
          <FormLabel>
            <Icon as={CheckCircleIcon} color={"blue"} />
            Giao tận nơi
          </FormLabel>
          <Stack spacing={4}>
            <FormControl id="address" isRequired>
              <Input placeholder="Nhập địa chỉ" />
            </FormControl>

            <FormControl id="city" isRequired>
              <Select placeholder="Tỉnh/Thành phố">
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP. Hồ Chí Minh</option>
                <option value="danang">Đà Nẵng</option>
              </Select>
            </FormControl>

            <FormControl id="district" isRequired>
              <Select placeholder="Quận/Huyện">
                <option value="dongda">Đống Đa</option>
                <option value="thanhxuan">Thanh Xuân</option>
                <option value="caugiay">Cầu Giấy</option>
              </Select>
            </FormControl>

            <FormControl id="ward" isRequired>
              <Select placeholder="Phường/Xã">
                <option value="vinhphuc">Vĩnh Phúc</option>
                <option value="khueTrung">Khuê Trung</option>
                <option value="xuanphuong">Xuân Phương</option>
              </Select>
            </FormControl>
          </Stack>
          <FormControl id="phoneNumber" isRequired>
            <Textarea size={"lg"} mt={2} placeholder="Ghi chú cho đơn hàng" />
          </FormControl>
          <Checkbox size="md" colorScheme="red" disabled>
            Nhận tại cửa hàng
          </Checkbox>
        </FormControl>

        <NavLink to={"/cart"}>
          <Button mt={4} colorScheme="gray">
            Giỏ hàng
          </Button>
        </NavLink>
        <Button mt={4} colorScheme="blue" float={"right"}>
          Tiếp tục thanh toán
        </Button>
      </Box>
    </Flex>
  );
};

export default Checkout;
