import { Link } from "react-router-dom"
import './Header_com.css'
function Header_components(){

    return(
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
        </div>
    )
}
export default Header_components