import React from 'react';

import HobbyProvider from './contexts/HobbyContext';
import HobbyList from './components/HobbyList';
import AddHobby from './components/AddHobby';

import './index.css';



const App = ({classe}) => {
    
    return (
       <HobbyProvider>
              <HobbyList><br></br></HobbyList>
              <br/>
              <br/>
              <br/>
              <AddHobby></AddHobby>
       </HobbyProvider>
    );
                    
}

export default App;