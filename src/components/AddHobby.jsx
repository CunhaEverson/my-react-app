import React ,{ useContext, useState } from 'react';
import { HobbyContext } from '../contexts/HobbyContext';

const HobbyList = () => {
    const {saveHobby} = useContext(HobbyContext);
    const [hobby, setHobby] = useState();

    const handleFormSubmit = e => {
        e.preventDefault();
        saveHobby(hobby);
    }

    const handleInputChange = e => {
        setHobby({
            ...hobby,
            title: e.target.value,
            
        });
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="title" id="title" placeholder="Nova tarefa..." onChange={handleInputChange} />
            <button type="submit">Adicionar</button>
        </form>

    );
}
export default HobbyList;