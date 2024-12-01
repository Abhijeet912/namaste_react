import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData()
    },[]);

    const{resId}=useParams();


    const fetchData=async()=>{
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
            
            const json=await data.json();
            setResInfo(json.data);
            console.log(json);

    };
    
    const {name,avgRatingString,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info || {};

    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card||{};
    
    return resInfo===null?(<Shimmer/>):(
        
        <div className="menu">
            
            <h1>{name}</h1>
            <h3>Rating: {avgRatingString}</h3>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id} >{item.card.info.name}- {item.card.info.defaultPrice/100 ||item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;