import axios from "axios";  
import { useEffect } from "react";

export default function Logout(){

    useEffect(( ) => {
        const logoutUser = async () => {
            await axios.post("http://localhost:3000/api/v1/logout")
            .then((res) => {console.log(res);})
            .catch((err) => {console.log(err);})
        }
        logoutUser();
    },[])
}