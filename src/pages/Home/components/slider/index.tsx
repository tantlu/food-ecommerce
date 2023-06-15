import React, { useState, useEffect, useRef } from "react";
import { Image, Container, Icon, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import SlidedButton from "./SlidedButton";
interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [isHover, setIsHover] = useState<boolean>(false);

  const intervalIdRef = useRef<any>(null);

  function handleMoveIndex() {
    setSelectedImageIndex((preIndex) =>
      preIndex === images.length - 1 ? 0 : preIndex + 1
    );
  }

  useEffect(() => {
    if (intervalIdRef.current && isHover) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
      return;
    }
    intervalIdRef.current = setInterval(handleMoveIndex, interval);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isHover, interval]);

  const handleNextImage = () => {
    setSelectedImageIndex((preIndex) =>
      preIndex === images.length - 1 ? 0 : preIndex + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((preIndex) =>
      preIndex === 0 ? images.length - 1 : preIndex - 1
    );
  };

  return (
    <Container
      position="relative"
      px="0"
      maxW="calc(100vw)"
      height="calc(80vh)"
    >
      {/* image slide */}
      <Flex
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {images.map((imageUrl, index) => (
          <Image
            key={`${imageUrl}-${index}`}
            src={imageUrl}
            alt={`image-${index}`}
            position="absolute"
            top={0}
            width="100%"
            height="100%"
            opacity={index === selectedImageIndex ? 1 : 0}
            transition="opacity 1s ease"
          />
        ))}
      </Flex>

      {/* button direct slide */}

      <SlidedButton
        onClick={handlePrevImage}
        top={"50%"}
        transform={"translateY(-50%)"}
        left={0}
      >
        <ChevronLeftIcon
          boxSize={8}
          color="white"
          _hover={{ color: "gray.300" }}
        />
      </SlidedButton>

      <SlidedButton
        onClick={handleNextImage}
        top={"50%"}
        transform={"translateY(-50%)"}
        right={0}
      >
        <ChevronRightIcon
          boxSize={8}
          color="white"
          _hover={{ color: "gray.300" }}
        />
      </SlidedButton>

      {/* dot */}
      <Flex
        justifyContent="center"
        top={"100%"}
        transform={"translateY(-100%)"}
      >
        {images.map((item, index) => (
          <Text
            display="block"
            onClick={() => setSelectedImageIndex(index)}
            cursor="pointer"
            color={index === selectedImageIndex ? "primary" : "gray.300"}
            as="span"
            fontSize="50px"
            key={item}
            transition="all 2s ease"
          >
            •
          </Text>
        ))}
      </Flex>
    </Container>
  );
};

export default ImageSlider;
