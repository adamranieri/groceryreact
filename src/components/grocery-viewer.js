import { useSelector } from "react-redux"

export default function GrorceryViewer(){

    const budget = useSelector( state => state.budget)
    const items = useSelector(state => state.items)
    const groceryList = items.map(i => <li>{i}</li>)

    return(<>
    <h4>Budget {budget}</h4>
        <ul>
            {groceryList}
        </ul>
    </>)
}