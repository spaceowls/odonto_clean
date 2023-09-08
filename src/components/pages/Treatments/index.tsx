import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ButtonWrapper } from "../../ButtonWrapper/index";
import seta_baixo from "../../../assets/images/seta_baixo.svg";

import { arrayTreatments } from "../../../helpers/arrayTreatments";

export const Treatments = () => {
  const [state, setState] = useState(4);

  useEffect(() => {
    window.screen.width <= 425 ? setState(2) : setState(4);
  }, [window.screen.width]);
  function detectWindowSize() {
    window.screen.width <= 425 ? setState(2) : setState(4);
  }
  window.onresize = detectWindowSize;
  return (
    <Box w="full" h="auto" mt="64px">
      <Heading size="xl" mb="-64px">
        Tratamentos
      </Heading>

      <SimpleGrid columns={[1, 2]}>
        {arrayTreatments.slice(0, state).map((infos) => {
          return (
            <LinkBox mt="94px" mr="30px" key={infos.id}>
              <Heading textAlign="left" display={"flex"} justifyContent="start">
                <Image src={infos.icon} mb="9px" marginRight="7px" />
                <LinkOverlay mb="9px">{infos.title} </LinkOverlay>
              </Heading>
              {state <= 4 ? (
                <Text
                  textAlign="left"
                  className={infos.id === 3 || infos.id === 4 ? "text" : ""}
                >
                  {infos.text}
                </Text>
              ) : (
                <Text textAlign="left" opacity="none">
                  {infos.text}
                </Text>
              )}
            </LinkBox>
          );
        })}
      </SimpleGrid>
      {
        <button
          style={{
            color: "white",
          }}
          onClick={(event) => {
            event.preventDefault();
            setTimeout(() => {
              state <= 4 ? setState(6) : setState(4);
            }, 100);
          }}
        >
          {state <= 4 ? (
            <ButtonWrapper
              bgColor="linear(rgba(32, 152, 227, 1), rgba(12, 99, 223, 1))"
              imgIcon={seta_baixo}
              text="Mostrar mais"
              width={"178px"}
              marginTop={"15px"}
              padding={"20px"}
            />
          ) : (
            <ButtonWrapper
              bgColor="linear(rgba(32, 152, 227, 1), rgba(12, 99, 223, 1))"
              imgIcon={seta_baixo}
              text="Mostrar Menos"
              width={"178px"}
              padding={"20px"}
              marginTop={"30px"}
              isInvert={true}
            />
          )}
        </button>
      }
    </Box>
  );
};
