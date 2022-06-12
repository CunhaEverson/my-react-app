import React, { useState, createContext } from 'react';


export const HobbyContext = createContext();

const HobbyProvider = ({ children }) => {
    const [hobbys, setHobbys] = useState([
        { id: 1, title: 'Leitura: A leitura é uma boa forma de conhecer novas histórias e aprender outras coisas sem precisar sair do sofá. É um ótimo hobby para  relaxar e se destrair após um dia corrido.', done: true }, 
        { id: 2, title: 'Ciclismo: Uma forma de passear pela cidade e ainda praticar um esporte.', done: true },
        { id: 3, title: 'Corrida: também pode ser um passatempo interessante para desestressar e eliminar energias pesadas.', done: false},
        { id: 4, title: 'Natação: Um passatempo que possibilita um grande contato com a água.', done: false},
        { id: 5, title: 'Futebol: Uma paixão nacional, que também alivia o estresse e mantém a forma física.', done: false},

    ]);





    const saveHobby = hobby => {
        const newHobby = {
            id: hobbys.length + 1,
            title: hobby.title,
            done: false,
        };
        setHobbys([...hobbys, newHobby]);
    }
    return (
        <HobbyContext.Provider value={{ hobbys, saveHobby }}>
            {children}
        </HobbyContext.Provider>
    )
}

export default HobbyProvider;