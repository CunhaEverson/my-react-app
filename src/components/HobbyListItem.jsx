import React from "react";

const HobbyListItem = ({hobby}) => {
    return (
        <div>
            {hobby.id} - {hobby.title} - {hobby.done ? 'Feito' : 'Pendente'}

        </div>
    );
}
export default HobbyListItem;