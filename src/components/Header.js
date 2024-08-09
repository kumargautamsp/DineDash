import { LOGO_URL } from "../utils/constants";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
const [btnNameReact , setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();

useEffect (() =>{
    console.log("useeffect called");
},[btnNameReact]);

return(
<div className="flex justify-between bg-pink-100 shadow-lg hover:bg-pink-200">
<div className="Logo-container">
    <img className="w-40" src={LOGO_URL}/>
</div>
<div className="flex items-center">
    <ul className="flex p-4 m-4" >
        <li className="px-4">
        Online status : {onlineStatus ? "✅" : "🔴"}
        </li>
    <li className="px-4">
        <Link to ="/">Home</Link></li>
    <li>
        <Link to ="/about">
        About Us</Link>
        </li>
    <li className="px-4">
        <Link to ="/contact">Contact Us</Link>
        </li>
        <li className="px-4">
        <Link to ="/grocery">Grocery</Link> 
        </li>
    <li className="px-4">Cart</li>
    <button className="login" 
    onClick = {() => {
        btnNameReact == "Login"
       ? setBtnNameReact ("Logout")
        : setBtnNameReact ("Login"); 
    }}
    >
        {btnNameReact}
        </button>
    </ul>
</div>
</div>
);
    };

    export default Header;