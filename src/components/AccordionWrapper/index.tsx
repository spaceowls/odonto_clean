import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { DuvidasProps } from "../../@types/duvidasTypes";

export const AccordionWrapper = ({ title, text, id }: DuvidasProps) => {
  return (
    <Accordion defaultIndex={[1]} allowMultiple key={id}>
      <AccordionItem
        mb="20px"
        bg="#fff"
        border="none"
        boxShadow=" 5px 5px 5px rgba(55, 121, 215, 0.25)"
        borderRadius="5px"
      >
        <h2>
          <AccordionButton
            _expanded={{ bg: "rgba(32, 152, 227, 1)", color: "white" }}
          >
            <Box flex="1" textAlign="left" fontWeight="bold">
              {title}
            </Box>
            <AccordionIcon bg="rgba(12, 99, 223, 0.15)" borderRadius="5px" />
          </AccordionButton>
        </h2>
        <AccordionPanel color="rgba(2, 14, 31, 0.69)" pb={4}>
          {text}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
