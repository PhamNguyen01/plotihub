import './App.css';
import MiniDrawer from './Components/Drawer';
import BasicButtons from './Components/Dasboard';
import { Route, Routes } from "react-router-dom";
import Invoices from './Components/Invoices';

function App() {
  return (
    <div className="App">
      <MiniDrawer />
      <BasicButtons />
      {/* <Invoices /> */}
    </div>
  );
}

export default App;

