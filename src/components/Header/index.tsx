import { Button, Container, ContainerTitle, Title } from "./styles";
import logo from '../../assets/AdopteMe.svg';
import { useContext } from "react";
import { PetsDataContext } from "../../hooks/petsData";
export function Header(){
  const {openModal} = useContext(PetsDataContext)
  return(
    <Container>
      <ContainerTitle>
      <Title>ADOPTE</Title>
        <img src={logo} alt="adopteme" />
        <Title>Me</Title>
      </ContainerTitle>
        <Button onClick={openModal}>Cadastrar </Button>
    </Container>
  )
}