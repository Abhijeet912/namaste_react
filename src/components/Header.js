import { LOGO_URL } from "../utils/constants";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const[btnName,setBtnName] =useState("Login");

  const onlineStatus = useOnlineStatus();

  const data=useContext(UserContext);
  console.log(data);
  const loggedInUser=data.loggedInUser;
  

  //selector hook: Subscribing to the store using Selector

  const cartItems=useSelector((store)=>{
    return store.cart.items
  });

  return (
    <div className="flex justify-between bg-green-200 mb-2 sticky top-0 h-[80px] w-full z-10 shadow-md"> {/**Top most header class */}
      <div className="logo-container">
        <img className="w-20 rounded-full m-2" src={LOGO_URL} />
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
          <li className="px-4 font-extrabold"><Link to="/cart">Cart ({cartItems.length})</Link></li>
      
            <button 
            className="login"
            onClick={()=>{

              btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
              console.log(btnName);
            }}>{loggedInUser}</button>

            <li></li>
          
        </ul>
      </div>
    </div>
  );
};
export default Header;