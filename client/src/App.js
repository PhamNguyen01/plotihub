import './App.css';
import React, { useEffect, useState } from 'react';

import MiniDrawer from './Components/Drawer';
import BasicButtons from './Components/Dasboard';
import { Route, Routes } from "react-router-dom";
import Invoices from './Components/Invoices';


function App() {

const [user, setUser] = useState([]);


useEffect(() => {
    fetch("http://localhost:3000/me")
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            console.log(data)

        }
        )
    // .then((data) => {
    //     console.log(data)
    // })
}, []);

  return (
    <div className="App">
      <MiniDrawer />
      <BasicButtons />
      {/* <Invoices /> */}
    </div>
  );
}

export default App;

