import { ChakraProvider, theme } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Home } from "./components/pages/Home";
import { Differential } from "./components/pages/Differential";
import { RetanguloPage } from "./components/pages/RetanguloPage";
import { Treatments } from "./components/pages/Treatments";
import WithSubnavigation from "./components/navbar/navbar";
import { Carousel } from "./components/pages/Carousel";
import { Footer } from "./components/Footer";
import { Clients } from "./components/pages/Clients";
import { Duvidas } from "./components/pages/Duvidas";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation />
      <Container maxW={{ sm: "768px", lg: "960px", xl: "1200px" }} h="auto">
        <Home />
        <Differential />
        <Treatments />
        <Carousel />
        <RetanguloPage />
        <Clients />
        <Duvidas />
      </Container>
      <Footer />
    </ChakraProvider>
  );
}
export default App;
