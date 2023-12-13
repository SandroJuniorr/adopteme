import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { Form, InputContainer } from './styles';
import { api } from '../../services/api';
import { PetsDataContext } from '../../hooks/petsData';

export function RegisterPet() {
  const {getPets,isOpenModal,closeModal} = useContext(PetsDataContext)
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0, 0.75)'
    }, content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth:'500px'
    }
  }

 
  function handleRegisterPet(event:React.SyntheticEvent){
    event.preventDefault();
    api.post("pets", { name,race,age,image}).then(()=>{
      getPets();
      closeModal();
      setName("");
      setAge("");
      setRace("");
      setImage("");
    })
     
  }
  return (
    <Modal
      isOpen={isOpenModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
    >
      <h2>Cadastre um novo animal para adoção.</h2>
      <Form onSubmit={handleRegisterPet}>
      <InputContainer >
          <p>Nome</p>
          <input onChange={(e)=>{setName(e.target.value)}} />
        </InputContainer>
        <InputContainer>
          <p>Raça</p>
          <input onChange={(e)=>{setRace(e.target.value)}}  />
        </InputContainer>
        <InputContainer>
          <p>Idade</p>
          <input type='number' onChange={(e)=>{setAge(e.target.value)}} />
        </InputContainer>
        <InputContainer>
          <p>Imagens</p>
          <input onChange={(e)=>{setImage(e.target.value)}}  />
        </InputContainer>

        <button type='submit'>Cadastrar</button>
      </Form>
    </Modal>
  )
}