import { useRef } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../store"

export default function ItemForm(){

    const itemInput = useRef()
    const dispatch = useDispatch()

    function addItem(){
        const action = actions.addItem(itemInput.current.value)
        dispatch(action)
    }


    return(<>
        <input ref={itemInput}/>
        <button onClick={addItem}>Add Item</button>
    </>)

}