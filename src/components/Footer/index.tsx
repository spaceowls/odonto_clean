import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Heading,
  IconButton,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import footer_logo from "../../assets/images/footer_logo.png";
import youtube_icon from "../../assets/images/youtube_icon.png";
import insta_icon from "../../assets/images/insta_icon.png";
import agend from "../../assets/images/agendar.svg";
import { ButtonWrapper } from "../ButtonWrapper";

export const Footer = () => {
  return (
    <Box
      as="footer"
      pos="relative"
      w="full"
      boxShadow={"0px 10px 25px  rgba(55, 121, 215, 0.25);"}
    >
      <Container maxW={{ sm: "768px", lg: "960px", xl: "1200px" }}>
        <Stack
          spacing="2"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "12", md: "16" }}
        >
          <Stack align="center" justify="center" direction="row">
            <Image src={footer_logo} alt="Logo Footer" />
            <Box>
              <Heading size="md" color="muted">
                Odonto Clean
              </Heading>
              <Text fontWeight="500" color="rgba(2, 14, 31, 0.85)">
                Clínica odontológica
              </Text>
            </Box>
          </Stack>
          <Stack
            direction={{
              base: "column-reverse",
              md: "row-reverse",
              lg: "row-reverse",
            }}
            spacing={{ base: "12", md: "8" }}
            justify="center"
          >
            <Stack direction="column" spacing="8">
              <Stack spacing="1" w="full" flex="1">
                <Heading
                  fontSize="md"
                  fontWeight="bold"
                  color="rgba(2, 14, 31, 0.85)"
                  textAlign="center"
                  mb="10px"
                >
                  Venha conhecer nossa clínica!
                </Heading>
                <Stack
                  spacing=".5"
                  shouldWrapChildren
                  align="center"
                  direction="row"
                  justify="center"
                >
                  <ButtonWrapper
                    colorfont="#fff"
                    bgColor="linear(rgba(32, 152, 227, 1), rgba(12, 99, 223, 1))"
                    imgIcon={agend}
                    text="Vamos Agendar"
                    width="180px"
                  />
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="column" spacing="8">
              <Stack spacing="2" w="full" flex="1">
                <Heading
                  fontSize="md"
                  fontWeight="bold"
                  color="rgba(2, 14, 31, 0.85)"
                  textAlign="center"
                >
                  Rede social
                </Heading>
                <Stack
                  spacing=".5"
                  shouldWrapChildren
                  align="center"
                  direction="row"
                  justify="center"
                >
                  <Link href="https://chakra-ui.com" isExternal>
                    <Image src={youtube_icon} alt="Link do Youtube" mr="8px" />
                  </Link>
                  <Link href="https://chakra-ui.com" isExternal>
                    <Image src={insta_icon} alt="Link do Instagran" />
                  </Link>
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="column" spacing="8">
              <Stack spacing="1" w="full" flex="1">
                <Heading
                  fontSize="md"
                  fontWeight="bold"
                  color="rgba(2, 14, 31, 0.85)"
                  textAlign="center"
                >
                  Contato
                </Heading>
                <Stack spacing=".5" shouldWrapChildren align="center">
                  <Button variant="link">(61) 95682.5324</Button>
                  <Button variant="link">contato.@odontoclean.com.br</Button>
                </Stack>
              </Stack>
            </Stack>

            <Stack direction="column" spacing="8">
              <Stack spacing="1" w="full" flex="1">
                <Heading
                  fontSize="md"
                  fontWeight="bold"
                  color="rgba(2, 14, 31, 0.85)"
                  textAlign="center"
                >
                  Funcionamento
                </Heading>
                <Stack spacing=".5" shouldWrapChildren align="center">
                  <Button variant="link">
                    Manha:<Text fontWeight="400">&nbsp;8:00 - 12:00</Text>
                  </Button>
                  <Button variant="link">
                    Intervalo:<Text fontWeight="400">&nbsp;12:00 - 13:00</Text>
                  </Button>
                  <Button variant="link">
                    Tarde:<Text fontWeight="400">&nbsp;13:00 - 17:00</Text>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider borderWidth="2px" color="rgba(2, 14, 31, 0.09)" />
        <Stack
          pt="8"
          pb="12"
          justify="center"
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
        >
          <Text fontSize="sm" color="rgba(2, 14, 31, 0.36)" fontWeight="600">
            &copy; {new Date().getFullYear()} Designer Produtivo. Todos os
            direitos reservados.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
