import mao from "../assets/images/mao.svg";
import horario from "../assets/images/horarios.svg";
import dente from "../assets/images/dente.svg";
import fone from "../assets/images/fone.svg";
import equipe from "../assets/images/equipe.svg";
import seguranca from "../assets/images/seguranca.svg";

type JsonProps = {
  image: string;
  title: string;
  text: string;
  id: number;
};

export const arrayCards: JsonProps[] = [
  {
    id: 1,
    image: mao,
    title: "Profissionais Capacitados",
    text: "Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados.",
  },

  {
    id: 2,
    image: horario,
    title: "Horários flexíveis",
    text: "A marcação de consultas e exames pode ser feita de acordo com o melhor horário para os nossos pacientes.",
  },
  {
    id: 3,
    image: dente,
    title: "Tratamento personalizado",
    text: "Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós.",
  },

  {
    id: 4,
    image: fone,
    title: "Solicite um orçamento",
    text: "Nossa equipe de dentistas e assistentes é formada apenas por profissionais altamente qualificados.",
  },
  {
    id: 5,
    image: equipe,
    title: "Trabalho em equipe",
    text: "A marcação de consultas e exames pode ser feita de acordo com o melhor horário para os nossos pacientes.",
  },

  {
    id: 6,
    image: seguranca,
    title: "Higiene e segurança",
    text: "Cada paciente é recebido de forma única e seu conforto é uma prioridade para nós.",
  },
];
