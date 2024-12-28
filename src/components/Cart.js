import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);
    const clearItems=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4 w-[500] align-center">
            <h1 className="text-xl font-extrabold">Cart</h1>
            <button className="w-10 h-4 font-light text-sm bg-slate-200 outline-dashed"  onClick={clearItems}>Clear</button>
            <div className="width-[300px]">
                <ItemList items={cartItems}/>
            </div>
        </div>
        
    )
};

export default Cart;