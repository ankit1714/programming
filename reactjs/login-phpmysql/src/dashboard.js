import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{

    const [auth,setAuth]=useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        var auth = localStorage.getItem('email');
        setAuth(auth);
    },
    [])

    if(auth === null) {
        navigate('./login');
    }


    return(
        <div>
        Home
        </div>
    )
}

export default Dashboard;