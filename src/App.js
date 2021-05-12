import { useState } from 'react';
import {ChromePicker} from 'react-color';
import './App.css';
import Bgcolor from './components/bgcolor';

function App() {
 // const [color,setColor] = useState('#fff')
  return (
    // <div className="App" style={{backgroundColor:`${color}`}}>
    //         <ChromePicker color={color} onChange={updatedcolor=>setColor(updatedcolor.hex)}/>
    // </div>
    <>
    <Bgcolor/>
    </>
  );
}

export default App;
