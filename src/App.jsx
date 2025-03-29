import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';

function App() {
  const [checked,setChecked] = useState(false);
  console.log(checked);
  return (
    <div className='frame'>
      <div className="card">
        <div className="text-box">
          <p>All pages</p>

          <label className="checkbox-container">
            <input type="checkbox"
            checked={checked}
            onChange={()=>setChecked(!checked)}
            ></input>
            
            <span className="checkmark"></span>
          </label>

        </div>
        <div className="divider"></div>
        <div className="divider"></div>
       <Button></Button>
      </div>

    </div>
  )
}

export default App
