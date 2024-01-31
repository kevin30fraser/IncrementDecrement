import react from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import { useState } from "react"

const root=ReactDOM.createRoot(document.getElementById('root'));

function Count(){
  const[count,setcount]=useState(0);

  function increment(){
      setcount(count+1);
  }

  function decrement(){
    if(count>0){
      setcount(count-1);
    }
     
  }
return(
  <div className="container">
    <h1>Count</h1>
    <h1>{count}</h1>
    <div className="flex">
    <button className="btn" onClick={increment} >Increment</button>
    <button className="btn" onClick={decrement} >Decrement</button>
    </div>
    
  </div>
)
}

root.render(
  <div>
    <Count/>
  </div>
);