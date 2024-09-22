import { useState } from "react";
import './App.css'

function App(){
  const [count,setCount] = useState(0)

  function INC(){
    setCount(count +1)
   

  }
  const RES = () =>{
    setCount(0)
    

  }
   function DEC (){
    if(count>0){
      setCount(count -1)

    }
    
    


   }

  return(
    
   
    <div className="App">

      <div className="card">
        <span className="count">{count}</span>
        <div className="buttons">
          <button onClick={INC}>Increment</button>
          <button onClick={RES}>Reset</button>
          <button onClick={DEC}>Decrement</button>
        </div>
      </div>
      
    </div>
  )
}

export default App;
