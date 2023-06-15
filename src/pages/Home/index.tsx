import ProductList from "./components/product";
import ImageSlider from "./components/slider";
import { FRUIT_GIFTS_DATA } from "@/configs/fruitGiftsData";
import { Container } from "@chakra-ui/react";
import useDemo from "@/hooks/useDemo";
import Product from "./components/product";

type Props = {};
const IMAGES = [
  "/assets/images/banners/slide1.webp",
  "/assets/images/banners/slide2.webp",
  "/assets/images/banners/slide3.webp",
  "/assets/images/banners/slide4.webp",
];

const Home = (props: Props) => {
  useDemo();

  return (
    <>
      <ImageSlider images={IMAGES} />
      <Container centerContent maxW={"1300px"}>
        <Product
          containerProps={{ mb: "200px", m: "0 auto" }}
          label="Quà tặng trái cây"
          data={FRUIT_GIFTS_DATA}
          productBannerUrl="/assets/images/banners/products/banner_quatangtraicay.webp"
        />
      </Container>
      <Container centerContent maxW={"1300px"}>
        <Product
          containerProps={{ mb: "200px", m: "0 auto" }}
          label="Sản phẩm"
          data={FRUIT_GIFTS_DATA}
          productBannerUrl="/assets/images/banners/products/banner_sanpham.webp"
        />
      </Container>
      <Container centerContent maxW={"1300px"}>
        <Product
          containerProps={{ mb: "200px", m: "0 auto" }}
          label="Trái cây tươi hằng ngày"
          data={FRUIT_GIFTS_DATA}
          productBannerUrl="/assets/images/banners/products/banner_traicaytuoihangngay.webp"
        />
      </Container>
    </>
  );
};

export default Home;
