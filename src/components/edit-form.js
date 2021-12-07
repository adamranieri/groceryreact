import { useContext, useRef } from "react";
import { userContext } from "../App";


export default function EditForm(){

    const usernameInput = useRef()
    const [user, setUser] = useContext(userContext)

    function updateUsername(){
        setUser({...user, username: usernameInput.current.value})
    }

    return(<>

        <h3>Update username</h3>
        <input ref={usernameInput} />
        <button onClick={updateUsername}>Update</button>
    </>)
}