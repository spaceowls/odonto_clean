import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ButtonWrapper } from "../../ButtonWrapper";
import agendar_black from "../../../assets/images/agendar_black.svg";
import homem_no_dentistamb from "../../../assets/images/homem_no_dentistamb.png";
import homem_no_dentista from "../../../assets/images/homem_no_dentista.png";
import { useBreakpointValue } from "@chakra-ui/react";

export const RetanguloPage = () => {
  const variant = useBreakpointValue({
    base: homem_no_dentistamb,
    md: homem_no_dentista,
  });
  return (
    <Flex w="full" display="flex" justify="center">
      <Box
        w={{ base: "full", md: "75%" }}
        boxShadow=" 10px 10px 30px rgba(55, 121, 215, 0.25)"
        bg="#2098E3"
        borderRadius="20px"
        mt="60px"
        mb="60px"
        display="flex"
        justifyContent="space-evenly"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          w={{ base: "100%", md: "60%" }}
          align="start"
          justify="center"
          direction="column"
          p={[4, 4, 8, 16]}
        >
          <Heading
            size={["md", "md", "lg"]}
            color="#fff"
            mb="15px"
            lineHeight="35px"
            maxW={{ sm: "100%", md: "80%" }}
          >
            Venha fazer uma visita e conhecer nossa clínica!
          </Heading>
          <Box>
            <Text color="#fff" mb="22px" maxW={{ sm: "100%", md: "80%" }}>
              Estamos ansiosos para conhecer você e toda sua família.
            </Text>
          </Box>

          <ButtonWrapper
            colorfont="#000"
            text="Agende Agora"
            imgIcon={agendar_black}
            width="170px"
            bgColor="white 100%"
          />
        </Flex>

        <Box h="full">
          <Image
            w="full"
            src={variant}
            alt="Homem sendo atendido por um dentista"
            h="full"
          />
        </Box>
      </Box>
    </Flex>
  );
};
