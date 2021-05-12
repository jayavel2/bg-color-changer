import { useState } from 'react';
import {ChromePicker} from 'react-color';
import '../App.css'

function Bgcolor() {
  const [color,setColor] = useState('#fff')
  const [flag,setflag] = useState(false)

  return (
    <div className="App" style={{backgroundColor:`${color}`}}>
        <input type="button" value="Bg-Color-Changer" onClick={()=>setflag(flag=>!flag)} />
        {flag  && <ChromePicker color={color} onChange={changedcolor=>setColor(changedcolor.hex)}/>}
    </div>
  );
}

export default Bgcolor