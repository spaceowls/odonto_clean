import { Box, Heading } from "@chakra-ui/react";

import client from "../../../assets/images/client1.svg";

import { arrayClients } from "../../../helpers/arrayClients";
import { CardClients } from "../../CardClients";
import { JsonProps } from "../../../@types/clientsTypes";

export const Clients = () => {
  return (
    <Box w="full">
      <Box w="full" mb="30px">
        <Heading>Nossos Clientes</Heading>
      </Box>
      <Box
        w="full"
        mb="20px"
        display="flex"
        flexDirection="row"
        overflow="auto"
        cursor="pointer"
        __css={{
          "&::-webkit-scrollbar": {
            w: "1",
            h: "1.5",
          },
          "&::-webkit-scrollbar-track": {
            w: "2",
            h: "1.5",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10",
            bg: `rgba(12, 99, 223, 1)`,
          },
        }}
      >
        {arrayClients.map((clients: JsonProps) => (
          <CardClients
            id={clients.id}
            text={clients.text}
            client={clients.client}
            name={clients.name}
            image={client}
          />
        ))}
      </Box>
    </Box>
  );
};
