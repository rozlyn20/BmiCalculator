import React,{useState} from 'react';

function MyComponent(){
    const [car,setCar]=useState();
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");
    
    function handleAddCar(){

    }
    function handleRemoveCar(){
        
    }
    function handleYearChange(){
        
    }
    function handleMakeChange(){
        
    }
    function handleModeChange(){
        
    }
     return(
        <div>
           <h2>Cars</h2>
           <ul>

           </ul>
           <input type='number' value={carYear} onChange={handleYearChange}/><br/>
           <input type='text' value={carYear} onChange={handleYearChange}/><br/>
           <input type='number' value={carYear} onChange={handleYearChange}/><br/>

        </div>
    );

}
export default MyComponent