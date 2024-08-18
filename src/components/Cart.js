import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () =>{
  dispatch(clearCart());
  };


    return(
      <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold mb-6 text-black">Cart</h1>
      <div className="w-full max-w-3xl mx-auto">
        <button 
          className="p-2 mb-6 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <div className="bg-pink-100 border border-pink-300 shadow-lg rounded-lg p-8 mx-4 my-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-pink-400">
            <h2 className="text-2xl font-semibold text-black mb-4">Cart is Empty</h2>
            <p className="text-gray-700">It looks like you haven't added any items to your cart yet. Start shopping and add some products to your cart!</p>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;