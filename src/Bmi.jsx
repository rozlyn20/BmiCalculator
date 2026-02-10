import { useState } from "react";

function Bmi(){
    const[bmi,setBmi]=useState();
    const[age,setAge]=useState();
    const[gender,setGender]=useState();
    const[weight,setWeight]=useState();
    const[height,setHeight]=useState();
    const[bmiStatus,setBmiStatus]=useState();

function handleAge(event){
    setAge(event.target.value);
}
function handleGender(event){
    setGender(event.target.value)
}
function handleHeight(event){
    setHeight(event.target.value)
}
function handleWeight(event){
    setWeight(event.target.value)
}
function calculateBmi(){
    const w = Number(weight);
    const h = Number(height);
    const val = w / (h * h);
    setBmi(val)
    if(val<18.5){
        setBmiStatus("Under Weight");
    }
    else if(val>=18.5 && val<25)
        setBmiStatus("Normal");
    else if(val>=25 && val>30)
        setBmiStatus("OverWeight");
    else
        setBmiStatus("Obese");
    
}

return(<>
<div className="container">
<div className="box">
    <h1>BMI</h1>
    <p className="star">{bmi}</p>
    <p className="status"> Bmi Status: {bmiStatus}</p>
    <p>Age: {age} </p>
    <p>Gender: {gender} </p>
    <p>Height : {height} </p>
    <p>Weight: {weight}</p>
</div>
    <div>
        <label htmlFor="age">Age:</label>
        <input type="number" value={age} onChange={handleAge} id="age"/><br/>
        <label> <p>Gender</p>
                <input type="radio" name="gender" onChange={handleGender} value="Male"/>
                Male
                <input type="radio" name="gender" onChange={handleGender} value="Female"/>
                Female
        </label>
        <label htmlFor="height">Height(in meters):</label>
        <input type="number" value={height} onChange={handleHeight} id="height"/><br/>
        <label htmlFor="weight">Weight:</label>
        <input type="number" value={weight} onChange={handleWeight} id="weight"/><br/>
        <button onClick={calculateBmi}>Calculate</button>
        

    </div>
</div>
</>);
}
export default Bmi