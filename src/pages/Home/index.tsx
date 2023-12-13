import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { RegisterPet } from "../../components/ModalRegisterPet";
import { PetsDataProvider } from "../../hooks/petsData";


export function Home() {
    return (
        <PetsDataProvider>
            <Header/>
            <Card/>
            <RegisterPet />
        </PetsDataProvider>
    )
}