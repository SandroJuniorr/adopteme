import { createContext, ReactNode, useContext, useState} from "react";
import { api } from "../services/api";

export interface Pet {
    id: number;
    name: string;
    race: string;
    age: number;
    image: string;
  }

export const PetsDataContext = createContext({} as IPetsContext)
interface PetsProviderProps {
    children: ReactNode
}


interface IPetsContext {
    pets:any;
    getPets: () => void;
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
}
function PetsDataProvider({children}: PetsProviderProps){
 const [pets, setPets] = useState<Pet[]>([])
 const [isOpenModal, setIsOpenModal] = useState(false);

 async function getPets() {
    await api.get<Pet[]>("/pets").then((response) => {
      const data = response.data.map((pet) => ({
        ...pet,
      }));
      setPets(data);
    });
  }

  function openModal() {
    setIsOpenModal(true);
  }
  function closeModal() {
    setIsOpenModal(false);
  }
    return(
        <PetsDataContext.Provider value={{pets,getPets,isOpenModal,openModal,closeModal}}>
            {children}
            </PetsDataContext.Provider>
    )
}
function usePetsData(){
    const context = useContext(PetsDataContext);
    return context
}

export { PetsDataProvider, usePetsData}