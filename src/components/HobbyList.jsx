import React, { useContext } from "react";
import HobbyListItem from "./HobbyListItem";
import  {HobbyContext} from "../contexts/HobbyContext";




const HobbyList = () => {
    const context = useContext(HobbyContext);

    const data = context.hobbys.map(hobby=>(
        <HobbyListItem key={hobby.id} hobby={hobby}></HobbyListItem>
    ))
    return (
        <div>
            {data}
        </div>

    );
}
export default HobbyList;