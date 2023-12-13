import { useContext, useEffect, useState } from "react";
import { CardList } from "./styles";
import { api } from "../../services/api";
import { Pet, PetsDataContext } from "../../hooks/petsData";

export function Card() {
  const {pets, getPets} = useContext(PetsDataContext)
 
  useEffect(() => {
    getPets();
  }, []);

  return (
    <CardList>
      {pets.map((pets:Pet) => {
        return (
          <li key={pets.id}>
            <img src={pets.image} alt={pets.name} />
            <div className="info">
              <div>
                <strong>{pets.race}</strong>
              </div>
              <div>
                <span>{pets.name}</span>
                <strong> {`${pets.age} anos`} </strong>
              </div>
            </div>
          </li>
        );
      })}
    </CardList>
  );
}
