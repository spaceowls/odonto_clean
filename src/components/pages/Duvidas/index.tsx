import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import duvidas from "../../../assets/images/duvidas.png";
import { arrayAccordion } from "../../../helpers/arrayAccordion";
import { AccordionWrapper } from "../../AccordionWrapper";

export const Duvidas = () => {
  return (
    <SimpleGrid columns={[1, 2]} gap="30px" mt="50px">
      <Box>
        <Box>
          <Heading mb="30px">Dúvidas frequentes</Heading>
          <Text mb="50px">
            É sempre bom manter-se informado(a) e é por isso que preparamos essa
            seção para esclarecer suas possíveis dúvidas.
          </Text>
        </Box>

        <Box>
          {arrayAccordion.map((duvidas) => (
            <AccordionWrapper
              title={duvidas.title}
              text={duvidas.text}
              id={duvidas.id}
            />
          ))}
        </Box>
      </Box>
      <Box h="90%">
        <Image src={duvidas} alt="Duvidas frequentes pelos clientes" />
      </Box>
    </SimpleGrid>
  );
};
