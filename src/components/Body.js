import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body =  () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData=async() =>{
    const data=await fetch("https://mocki.io/v1/14a1d835-ff5b-4286-8de3-28b556914ecd");
    const json=await data.json();
    console.log(json);
    setListOfRestraunt(json);
    setFilteredRestaurants(json);
  };

  if(listOfRestaurants.length==0){
     return <Shimmer/>;
  }
  



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
               func=(res) =>{
                return res.info.avgRating > 4;
              }
            );
            setListOfRestraunt(filteredList);
          }}
        >
          
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;