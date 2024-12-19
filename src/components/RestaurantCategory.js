import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems, setShowIndex})=>{
    
    const handleClick=()=>{
        setShowIndex();
    }
    return(
        <div className="bg-slate-50 my-2  container rounded-lg">
            {/**Accordian Header */}
            <div className="flex justify-between items-center h-11 px-4 shadow-lg  cursor-pointer" onClick={handleClick}>
                <span className="text-center text-lg text-slate-950 font-semibold">{data.title}({data.itemCards.length})</span>
                <span>{showItems ? "▲" : "▼"}</span>
                
            </div>
            {/**Accordian Body */}
            {showItems && <ItemList items={data.itemCards}/>}
            
        </div>

    )
}
export default RestaurantCategory;