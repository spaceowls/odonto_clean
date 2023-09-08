import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { JsonProps } from "../../@types/clientsTypes";
import aspa from "../../assets/images/aspa.png";

export const CardClients = ({ id, text, name, client, image }: JsonProps) => {
  return (
    <Box
      minW="450px"
      h="250px"
      mt="40px"
      p={6}
      borderRadius="15px"
      boxShadow=" 5px 5px 5px rgba(55, 121, 215, 0.25)"
      key={id}
      mr="15px"
      mb="40px"
      transition=".2s ease-in"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: " 10px 10px 30px rgba(55, 121, 215, 0.25)",
      }}
    >
      <Box
        h="full"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Text w="full" pos="relative">
          <Image src={aspa} alt="Aspas" pos="absolute" top="-60px" />
          {text}
        </Text>

        <Box w="full" display="flex" mt="16px">
          <Image src={image} alt="Feedback de nossos Clientes" />
          <Box ml="14px">
            <Heading size="sm">{name}</Heading>
            <Text>{client}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
