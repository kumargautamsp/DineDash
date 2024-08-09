import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

    const [listOfRestaurants ,setListofRestaurant] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered", listOfRestaurants);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const  data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        

        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false)
        return (
    <h1>
        Looks like You are offline!! please check your internet connection;
    </h1>
    );



return listOfRestaurants.length == 0 ?< Shimmer />:(
<div className="body">
<div className="filter flex">
    <div className="search m-1 p-4">
        <input type="text" className="border border-solid border-pink-100"
         value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value);
        }}
        />
        <button className="px-4 py-2 bg-green-200 m-4 rounded-full"
         onClick={() =>{
          // Filter the restaurant card and update th UI
          //searchText  
        
        const filteredRestaurant = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredRestaurant(filteredRestaurant);

        }}>Search</button>
    </div>
    <div className="search m-3 p-5  flex-items-centre">
    <button 
     className="px-4 py-2 bg-gray-100 rounded-full" 
      onClick={() =>{
        //Filter logic here
        const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5

    );
    setListofRestaurant(filteredList);
    }}>
        Top Rated Restaurants
        </button>
    </div> 
</div>
        <div className="flex flex-wrap">
    {filteredRestaurant.map((restaurant) => (
     <Link key={restaurant.info.id}
        to={"/restaurants/" + restaurant.info.id}>< RestaurantCard resData= {restaurant}/>
     </Link>
    
         ))}
        </div>
        </div>
    );
    };

    export default Body;