import { useState } from "react";

export function StateLearning() {

    let [age, setAge] = useState(1);

    const increaseAge = ()=>{
        setAge(age + 1);
    }
    
    //input
    let [inputValue, setInputValue] = useState("");

    const handleInputValue = (event)=>{
        console.log(event.target.value)
        setInputValue(event.target.value)
    }

  
    return (
        <>
        <div>
            {age}  <br />
            <button onClick={increaseAge}>Increase</button>
        </div>

        <div>
            <input type="text" onChange={handleInputValue}/>
            {inputValue}
        </div>

        </>
    );
}