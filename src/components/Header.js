import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const[btnName,setBtnName] =useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-200 m-4 sm:bg-red-200"> {/**Top most header class */}
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 px-2 text-red-700 font-bold" >
        <li>
            <button
              className={`status-toggle ${onlineStatus ? "online" : "offline"}`}
            >
              {onlineStatus ? "Online 🟢" : "Offline 🔴"}
            </button>
        </li>
        <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About</Link></li>
        <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
      
            <button 
            className="login"
            onClick={()=>{

              btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
              console.log(btnName);
            }}>{btnName}</button>
          
        </ul>
      </div>
    </div>
  );
};
export default Header;