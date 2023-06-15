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
} from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import TimeModal from "./timeModal";
import { NavLink } from "react-router-dom";

type Props = {};

const InforOrder = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState("Giao khi có hàng");
  const [isTimeModal, setIsTimeModal] = useState<boolean>(false);
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTimeModal(event.target.checked);
  };
  return (
    <Flex p={"5"} w={"30%"} border="1px" borderColor="gray.200">
      <form action="submit">
        <Text as={"b"} fontSize={"2xl"}>
          Thông tin đơn hàng
        </Text>

        <Box
          mt={"5"}
          borderBottom={"1px"}
          borderColor="gray.200"
          backgroundColor={"#FCFCFC"}>
          <Box w={"60%"} float={"left"}>
            <Text fontSize={"sm"}>THỜI GIAN GIAO HÀNG</Text>
            <Text as={"b"} fontSize={"xs"}>
              <Icon as={RepeatClockIcon} />
              {deliveryTime}
            </Text>
          </Box>
          <Box float={"right"} w={"40%"}>
            <List>
              <Checkbox size="sm" colorScheme="red">
                Giao khi có hàng
              </Checkbox>
              <Checkbox size="sm" colorScheme="red" onChange={handleCheckbox}>
                Chọn thời gian
              </Checkbox>
            </List>
          </Box>
          <Box transition={"top 1s ease-in-out"}>
            {isTimeModal && <TimeModal />}
          </Box>
        </Box>

        <Box mt={"10"} borderBottom={"1px"} borderColor="gray.200">
          <Text as={"b"}>Tổng tiền</Text>
          <Text float={"right"}> {totalPrice}Đ </Text>
        </Box>

        <Box mt={"3"}>
          <UnorderedList>
            <ListItem fontSize={"sm"}>
              Quý khách mua biếu/ tặng, vui lòng để lại số điện thoại tại phần
              NOTE trong trang giỏ hàng.
            </ListItem>
            <ListItem fontSize={"sm"}>
              Phí vận chuyển và mã giảm giá sẽ được áp dụng ở trang thanh toán.
            </ListItem>
            <ListItem fontSize={"sm"}>
              Quý khách vui lòng thanh toán bằng hình thức: Ví VNpay để tối
              thiểu chi phí giao hàng.
            </ListItem>
          </UnorderedList>
        </Box>
        {totalPrice === 0 && (
          <Box
            mt={"3"}
            textAlign={"center"}
            color={"red"}
            backgroundColor={"#FEE3E8"}>
            <Text as={"b"} fontSize={"sm"}>
              Giỏ hàng của bạn hiện chưa đạt mức tối thiểu để thanh toán.
            </Text>
          </Box>
        )}
        <NavLink to={"/checkouts"}>
          <Button
            mt={"5"}
            type="submit"
            w={"100%"}
            textColor={"white"}
            backgroundColor={"#5B5B5B"}>
            THANH TOÁN
          </Button>
        </NavLink>
      </form>
    </Flex>
  );
};

export default InforOrder;
