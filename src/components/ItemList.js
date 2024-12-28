import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants.js";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();



  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-gray-300 border-b-2 flex items-center justify-between"
        >
          {/* Left Content */}
          <div className="text-left flex-1">
            <span className="block text-lg font-semibold mb-2">{item.card.info.name}</span>
            <span className="block text-gray-700 font-medium mb-2">
              ₹{item.card.info.price?item.card.info.price/100: item.card.info.defaultPrice/100}
            </span>
            <p className="text-sm text-gray-600 font-light">{item.card.info.description}</p>
          </div>

          {/* Right Image */}
          <div className="ml-4 relative inline-block">

            {item.card.info.imageId?
            <img
              className="h-[150px] w-[150px] rounded-lg object-cover"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}
              alt=" "
            />:" "}
             <button className=" absolute bottom-1 right-10 bg-white text-green-600 font-bold px-4 py-1 text-m rounded-md shadow-md transition-transform duration-500 ease-in-out transform hover:scale-95"
             onClick={() => handleAddItem(item)}>
                    Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
