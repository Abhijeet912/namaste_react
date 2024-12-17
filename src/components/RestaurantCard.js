import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;
  return (
    <div className="res-card w-[200px] p-2 m-2 transition-transform duration-500 ease-in-out transform hover:scale-95 hover:shadow-2xl rounded-xl">
      
      <img
        className="res-logo w-full h-32 object-cover rounded-xl" 
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <h3 className="font-semibold text-pretty">{name}</h3>
      <h4 className="m-2 text-gray-600 font-normal overflow-hidden text-ellipsis">{cuisines.slice(0, 3).join(", ")}</h4>
      <h4 className="m-2 text-gray-600 font-normal overflow-hidden text-ellipsis">{avgRating} stars</h4>
      <h4 className="m-2 text-gray-600 font-normal overflow-hidden text-ellipsis">{costForTwo}</h4>
      <h4 className="m-2 text-gray-600 font-normal overflow-hidden text-ellipsis">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

//Higher Order component
//input as restaurantcard ===> restaurantcard open

export const withPromotedLabel=(RestaurantCard) =>{
  return(props)=>{
    return(
      <div className="relative">
        <label className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-md z-10">Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;