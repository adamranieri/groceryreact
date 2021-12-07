import { Link } from "react-router-dom";

export default function NavBar(){

    return(<nav>
        <Link to="/viewer">viewer</Link>
        <Link to="/form">add to list</Link>
        <Link to="/budget">budget</Link>
    </nav>)
}