import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props; 
    const {loggedInUser} = useContext(UserContext);
 
const {cloudinaryImageId, name,cuisines,avgRating,costForTwo, deliveryTime,sla} = resData?.info;
    
 return (
     <div className="m-4 p-4 w-[235px] rounded-xl bg-pink-100 hover:bg-pink-200"
      >
         <img
         className="rounded-xl"
         alt="red-logo"
         src={CDN_URL + cloudinaryImageId}/>
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}stars</h4>
          <h4>{costForTwo }</h4>
          <h4>{sla?.slaString}</h4>
          <h4>User :{loggedInUser}</h4>
          
        
 
     </div>
 );
 };

 export default RestaurantCard;