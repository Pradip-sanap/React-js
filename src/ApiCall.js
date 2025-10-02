import { useEffect, useState } from "react";
import { Axios } from "axios";

export default function ApiCall() {
    let [allNames, setNames] = useState([]);
    let [allWebsite, setWebsite] = useState([]);
    let [allPhoneNO, setPhoneNo] = useState([]);

    let [click, setClick] = useState(false);

    useEffect(() => {

        

        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((data) => data.json())
        //     .then((data) => {
        //         console.log(data)
        //         // Extract the necessary fields from the response
        //         const names = data.map(user => user.name);
        //         const websites = data.map(user => user.website);
        //         const phoneNumbers = data.map(user => user.phone);
                
        //         // Update state in one go
        //         setNames(names);
        //         setWebsite(websites);
        //         setPhoneNo(phoneNumbers);
        //     });
             
    }, [])

    function showData() {
        setClick(!click) 

        console.log(allNames)

    }

    return (
        <>
            <button onClick={showData}>Get data</button>
            <br />

            {click && allNames.map(name=>{
                return (<>
                    <span>{name}</span> 
                    <br />
                </>)
            })}
        </>
    );
}