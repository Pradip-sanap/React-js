import axios from "axios";
import { useEffect, useState } from "react";

export const Excuser = () => {
    let [text, setText] = useState("");
    // let [domain, setDomain] = useState("")
    let [category, setCategory] = useState("")


    let getData = (domain) => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${domain}/`)
            .then(data => {
                console.log(data);

                setText(data.data[0].excuse);
                setCategory(data.data[0].category)
            })
    }


    useEffect(() => {

    }, [])


    return (
        <>
            <button onClick={()=> getData('party') }>Party</button><br />
            <button onClick={()=> getData('office')}>Office</button><br />
            <button onClick={()=> getData('family')}>Family</button><br />
            <button onClick={()=> getData('gaming')}>Gaming</button><br />

            <br />
            <br />
            Category: {category}
            <br />
            Excuse: {text}
        </>
    );
}