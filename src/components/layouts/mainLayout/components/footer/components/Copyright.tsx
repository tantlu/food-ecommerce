import { Box, Flex, Center, Icon, Text } from "@chakra-ui/react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

type Props = {};

const Copyright = (props: Props) => {
  return (
    <Flex borderTop="1px solid #ccc" width="100%" mt={5}>
      <Flex
        width="12%"
        background="#e63331"
        color="white"
        lineHeight="36px"
        p="0 10px"
        mr={30}
        borderLeft="10px solid #c50c0a"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          borderTop: "18px solid transparent",
          borderRight: "18px solid transparent",
          borderBottom: "18px solid transparent",
          borderLeft: "18px solid #e63331",
          transform: "translateX(100%)",
        }}
      >
        Hỗ trợ khách hàng
      </Flex>
      {/* contact info */}
      <Flex width="88%" justifyContent="space-between">
        <Flex>
          <Center pr={5}>
            <Icon boxSize={6} as={RiCustomerService2Fill} />
            <Text pl={1} fontSize={13}>
              <Text as="span" pr={1} color="red">
                MUA HÀNG:
              </Text>
              0972747899
            </Text>
          </Center>
          <Center pr={5}>
            <Icon boxSize={6} as={FiPhoneCall} />
            <Text pl={1} fontSize={13}>
              <Text as="span" pr={1} color="red">
                HOTLINE:
              </Text>
              0243 831 3999 (GIỜ HÀNH CHÍNH)
            </Text>
          </Center>
          <Center>
            <Icon boxSize={7} as={HiOutlineMail} />
            <Text pl={1} fontSize={13}>
              <Text as="span" pr={1} color="red">
                EMAIL:
              </Text>
              CSKH@KLEVERJUICE.COM.VN
            </Text>
          </Center>
        </Flex>

        <Center>
          <Text fontSize={13}>
            Copyright ©{" "}
            <Text
              as="span"
              fontWeight="bold
          "
            >
              2023
            </Text>{" "}
            Kleverfruit.
          </Text>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Copyright;
