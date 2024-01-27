import {useState} from "react"
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import Grocery from "./Grocery";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => {
   return(
    <a href="/">
       <img className = "w-56" alt = "logo" 
       src = {LOGO_URL}/> 
    </a> 
   )
}

const Header = () => {
    const[btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    return(
     <div className="flex justify-between bg-slate-300 shadow-xl m-2 ">
         <Title />

         <div className="flex items-center">
            <ul className="flex  p-4 m-4 " >
              <li className="px-4 p-4 font-bold">onlineStatus : {onlineStatus ? "🔴" : "✅"  }</li>
              <li className="px-4 p-4 font-bold"><Link to = "/">Home</Link></li>
              <li className="px-4 p-4  font-bold"><Link to = "/about">About</Link></li>
              <li className="px-4 p-4  font-bold"><Link to = "/contact">Contact</Link></li>
              <li className="px-4 p-4  font-bold"><Link to = "/grocery">Grocery</Link></li>
              <li className="px-4 p-4  font-bold">Cart</li>

              {/* <button className="login"  */}
              <button className="px-4 p-4 bg-orange-200 font-bold" 
                onClick = {() => {
                   btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                }
              }>{btnNameReact}</button>
           </ul>
         </div>
     </div>
    );
 };

 export default Header;