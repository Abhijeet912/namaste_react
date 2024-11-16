import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body =  () => {
  console.log("Body rendered")
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const[searchText, setSearchText] = useState("");
  const[filteredRestaurants, setFilteredRestaurant] = useState([]);
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData=async() =>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  

  //for shimmer
  if(listOfRestaurants.length==0){
     return <Shimmer/>;
  }
  



  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value);
            
          }}/>
          <button onClick={()=>{
              console.log(searchText);

              const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurant(filteredRestaurants);
            }}
            >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
               func=(res) =>{
                return res.info.avgRating > 4;
              }
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;