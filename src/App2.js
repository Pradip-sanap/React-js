
import {Planet} from './Planet.js';


function App2(){
    // for loop 
    const names = ["Pradip", "Swapnil", "Shubham", "Rakesh"];
    const planets = [
        {name:"Mars", isGasPlanet:true},
        {name:"Earth", isGasPlanet:false},
        {name:"Jupyter", isGasPlanet:false},
        {name:"Saturn", isGasPlanet:true},
        {name:"Venus", isGasPlanet:false},
        {name:"Naptune", isGasPlanet:true},
        {name:"Uranus", isGasPlanet:true},
    ]

    return (
        <>
            <h1 style={{backgroundColor:"red"}}>
                {names.map(data => {
                    return <h5>{data}</h5>
                })}
            </h1>

            {
                planets.map((planet, index) =>{
                    return planet.isGasPlanet && <Planet name={planet.name} />
                })
            }
           
        </>
    );
}

export default App2;