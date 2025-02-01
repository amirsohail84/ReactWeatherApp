import Search from './search'
import InfoBox from './infoBox'
import { useState } from 'react';
export default function Wapp(){
    const [winfo,setWinfo]=useState({});
    let updateInfo=(newInfo)=>{
        setWinfo(newInfo);
    }

    return(
        <>
            <h2 style={{color:"white"}}>Weather App</h2>
            <Search updateInfo={updateInfo}/>
            <br />
            <InfoBox info={winfo}/>
        </>
    );
}