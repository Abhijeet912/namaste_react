import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu=()=>{

    const{resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    const[showIndex,setShowIndex]=useState(null);

    
    
    const {name,avgRatingString,cuisines,costForTwoMessage}=resInfo?.cards[2].card?.card?.info||{} ;

    const{itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card||{};

    const categories=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);


    return resInfo===null?(<Shimmer/>):(
        
        <div className="menu text-center bg-gray-200 max-w-4xl mx-auto p-6 rounded-lg ">
            
            <h1 className="text-2xl font-extrabold my-6">{name}</h1>
            <h3>Rating: {avgRatingString}</h3>
            <p className="text-xl font-bold ">{cuisines.join(", ")} - {costForTwoMessage}</p>
            
            {/**Accordian Categories */}
            {categories.map((category,index)=>{
                return <RestaurantCategory data={category.card?.card} 
                key={category.card?.card?.title} 
                
                showItems={index==showIndex?true:false}
                setShowIndex={() =>
                    index == showIndex ? setShowIndex(null) : setShowIndex(index)}
                />
            }
            )}
        </div>
        

    )
}
export default RestaurantMenu;