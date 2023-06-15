import { Grid, Text, Link, ListItem, List, Image } from "@chakra-ui/react";
import CustomGridItem from "./CustomGridItem";
import Item from "./Item";

type ContactProps = {};

const Contact = (props: ContactProps) => {
  return (
    <Grid my={5} templateColumns="repeat(4, 1fr)" gap={5}>
      <CustomGridItem headingText="Thông tin công ty">
        <Text pb={1}>CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ ĐẦU TƯ K.L.E.V.E</Text>

        <List fontSize={14} spacing={3} listStyleType="none">
          <ListItem>
            <Text>Số đăng ký kinh doanh: 0101628217</Text>
          </ListItem>
          <ListItem>
            Địa chỉ: Lô A2, CN5, Cụm Công nghiệp Từ Liêm, Phường Phương Canh,
            Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam
          </ListItem>
          <ListItem>Hotline: 0972 747 899</ListItem>
          <ListItem>Email CSKH: cskh@klevejuice.com.vn</ListItem>
        </List>
      </CustomGridItem>

      <CustomGridItem headingText="Chính sách và dịch vụ">
        <List fontSize={14} spacing={3}>
          <Item text="Hệ thống cửa hàng">Hệ thống cửa hàng</Item>
          <Item text="Chính sách khách hàng thân thiết">
            Chính sách khách hàng thân thiết
          </Item>
          <Item text="Chính sách bảo mật thông tin cá nhân">
            Chính sách bảo mật thông tin cá nhân
          </Item>
          <Item text="Chính sách cho khách hàng doanh nghiệp">
            Chính sách cho khách hàng doanh nghiệp
          </Item>
        </List>
      </CustomGridItem>

      <CustomGridItem headingText="Kênh liên hệ">
        <List display="flex" fontSize={14}>
          <Item text="Facebook">
            <Image
              mr={3}
              boxSize={10}
              src="/assets/images/logo/fb.webp"
              alt="fb_logo"
            />
          </Item>
          <Item text="Instagram">
            <Image
              mr={3}
              boxSize={10}
              src="/assets/images/logo/insta.webp"
              alt="fb_logo"
            />
          </Item>
          <Item text="Youtobe">
            <Image
              boxSize={10}
              src="/assets/images/logo/yt.webp"
              alt="fb_logo"
            />
          </Item>
        </List>
      </CustomGridItem>

      <CustomGridItem headingText="Hệ thống cửa hàng">
        <List fontSize={14} spacing={3}>
          <Item text="Hà Nội">Hà Nội</Item>
          <Item text="Hồ Chí Minh">Hồ Chí Minh</Item>
        </List>
      </CustomGridItem>
    </Grid>
  );
};

export default Contact;
