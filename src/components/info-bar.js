import { useContext } from "react";
import { userContext } from "../App";


export default function InfoBar(){

    const [user] = useContext(userContext);

    return( 
        <span> <p>Logged in as: {user.username} </p></span>
    )
}