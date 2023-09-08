import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { ButtonWrapper } from "../../ButtonWrapper";
import whats_img from "../../../assets/images/whats.svg";
import lg_home_img from "../../../assets/images/lg_home_img.svg";

export const Home = () => {
  return (
    <Box w="full" h="auto" display={{ sm: "block", md: "flex" }}>
      <Box
        w="full"
        order={{ sm: 1, md: 2 }}
        display="flex"
        alignItems={{ sm: "center", md: "start" }}
        justifyContent="center"
        mb="25px"
      >
        <Image
          width="full"
          borderBottomLeftRadius="60px"
          src={lg_home_img}
          alt="Dentista olhando para uma mulher sorrindo"
        />
      </Box>
      <Box order={{ sm: 2, md: 1 }}>
        <Box w="full">
          <Text
            fontSize="25px"
            fontWeight="medium"
            mt={{ sm: "23px", md: "50px", lg: "100px" }}
            mb="15px"
            color="rgba(2, 14, 31, 0.69)"
          >
            20 Anos de experiência
          </Text>
          <Box
            as="h2"
            color="rgba(2, 14, 31, 0.85)"
            lineHeight="44px"
            fontWeight="bold"
            fontSize="39px"
            mt={{ sm: "10px", md: "20px" }}
          >
            Realizando sonhos de um sorriso perfeito!
          </Box>
          <Flex align="center" mt="30px">
            <ButtonWrapper 
              colorfont="#fff"
              bgColor="linear(rgba(32, 152, 227, 1), rgba(12, 99, 223, 1))"
              imgIcon={whats_img}
              text="Entre em contato"
              width="180px"
            />

            <Link
              href="#"
              ml="17px"
              fontWeight="600"
              color="rgba(12, 99, 223, 1)"
              fontSize="16px"
            >
              Saiba mais
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
