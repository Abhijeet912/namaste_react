import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body =  () => {
  console.log("Body rendered")
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);    {/**Gets changed when fetchData is called */}
  const[searchText, setSearchText] = useState("");                {/**Updates when ever content in searchbox is changed */}
  const[filteredRestaurants, setFilteredRestaurant] = useState([]);  {/**Changes when fetchData is called and when filter btn is clicked */}
  
  const RestaurantCardOpen=withPromotedLabel(RestaurantCard);
  
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
  console.log(listOfRestaurants);
  const onlineStatus=useOnlineStatus();
  if(onlineStatus==false){
    return <h1>Opps we have encountered an error</h1>
      
    
  }

  //for shimmer
  if(listOfRestaurants.length==0){
     return <Shimmer/>;
  }
  
  



  return (
    <div className="body">
      <div className="flex">

        {/**Search functionality for app */}
        <div className=""> 
          <input type="text" className="mb-2 w-sm max-w-sm px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-blue-500" value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value);
            
          }}/>
          <button  className="px-4 bg-orange-600 m-4 rounded-md transition-transform transform hover:translate-y-1"
          onClick={()=>{
              console.log(searchText);

              const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurant(filteredRestaurants);  {/**Chainging the state FilteredRestaurants */}
            }}
            >Search</button>
        </div>
        <div>
        <button
          className="px-4 bg-orange-600 m-4 rounded-md"
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
      </div>
      <div className="flex no-underline flex flex-wrap gap-10 mix-blend-soft-light"> {/*Res container */}
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
            {restaurant.info.isOpen?<RestaurantCardOpen resData={restaurant} />:
            < RestaurantCard  resData={restaurant} />}</Link>
        ))}
      </div>
    </div>
  );
};
export default Body;