import React,{useState} from 'react'
function Counter(){
 const [count,setCount]=useState(0);

const handleIncrement=()=>{
    setCount(c =>c+1);
}
const handleDecrement=()=>{
    setCount(count-1);
}
const handleReset=()=>{
    setCount(0);
}
return(<div className='container'>
      <h1 className='dis'>{count}</h1>
     <button className='btn' onClick={handleIncrement}>Increment</button>
     <button className='btn' onClick={handleReset}>Reset</button>
     <button className='btn' onClick={handleDecrement}>Decrement</button>
</div>)
}
export default Counter