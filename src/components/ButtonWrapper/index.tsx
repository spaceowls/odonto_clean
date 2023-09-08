import { Image, Link } from "@chakra-ui/react";

type ButtonProps = {
  text: string;
  imgIcon: string;
  width?: string;
  marginLeft?: string;
  bgColor: string;
  colorfont?: string;
  marginTop?: string;
  padding?: string;
  isInvert?: boolean;
};

export const ButtonWrapper = ({
  isInvert,
  text,
  imgIcon,
  width,
  marginLeft,
  marginTop,
  padding,
  bgColor,
  colorfont,
}: ButtonProps) => {
  return (
    <Link
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={width}
      h="32px"
      ml={marginLeft}
      colorScheme="white"
      bgGradient={bgColor}
      bg={bgColor}
      href="#"
      fontWeight="600"
      color={colorfont}
      fontSize="16px"
      borderRadius="5px"
      mt={marginTop}
      padding={padding}
    >
      <Image
        mr="6px"
        src={imgIcon}
        alt="WhatsApp"
        bg="rgba(242, 245, 250, 0.15)"
        borderRadius="2px"
        p={0.5}
        style={isInvert ? { transform: "rotate(180deg)" } : undefined}
      />
      {text}
    </Link>
  );
};
