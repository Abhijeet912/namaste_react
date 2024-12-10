import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{

    const{resId}=useParams();

    const resInfo=useRestaurantMenu(resId);


    
    
    const {name,avgRatingString,cuisines,costForTwoMessage}=resInfo?.cards[2].card?.card?.info||{} ;

    const{itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card||{};
    
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