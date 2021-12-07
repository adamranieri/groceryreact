import { useDispatch, useSelector } from "react-redux"
import { actions } from "../store"

export default function BudgetManager(){

    const budget = useSelector(state => state.budget)
    const dispatch = useDispatch()
    

    function increase(){
        const action = {type:'Tasks/increaseBudget'};
        dispatch(action)
    }

    function decrease(){
        const action = actions.lowerBudget()
        dispatch(action)
    }
    
    return(<>
        <h3>Budget {budget}</h3>
        <button onClick={increase}> Increase </button>
        <button onClick={decrease}> Decrease </button>
    </>)
}