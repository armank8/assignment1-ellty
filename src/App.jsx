import React, { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';
import checkIcon from "./assets/images/vector_141.png";

function App() {
  const [checkedItems, setCheckedItems] = useState({});
  console.log(checkedItems);
  let items = ["All Pages", "Page 1", "Page 2", "Page 3", "Page 4",]

  const handleOnChange = (item) => {
    console.log(item);
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };
  return (
    <div className='frame'>
      <div className="card checkbox-list">
        {
          items.map((item) => (
            <React.Fragment key={item}>
              <label className={`checkbox-container
              ${checkedItems[item] ? "checked" : ""} `} >

                <span className='checkbox-label'>{item}</span>

                <input type="checkbox"
                  checked={!!checkedItems[item]}
                  onChange={() => handleOnChange(item)}
                ></input>

                <span className="custom-checkbox">
                  {checkedItems[item] && <img src={checkIcon}></img>}
                </span>

              </label>
              {item === "All Pages" && <hr className='divider'></hr>}
            </React.Fragment>
          ))}

      </div>

    </div >
  )
}

export default App
