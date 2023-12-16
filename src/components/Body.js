import RestaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
   const [listOfRestaurant, setListOfRestaurant] = useState(RestaurantList);

   useEffect(() => {
    fetchData();
   }, [])

   const fetchData = async() => {
     const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.620006274691274&lng=77.29885853827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     );
     
     const json = await data.json();
     console.log(json)
     //console.log(json?.data?.cards[2]?.card?.card?.gridElements);
     //setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements);
   }

    return(
        <div className="body">
            <button className="filter-btn" 
                onClick={() => {
                   const filteredList = listOfRestaurant.filter(
                     (res) => res.data.avgRating >= 4
                   );
                   setListOfRestaurant(filteredList);
                }}
            >
                Top Rated Restaurant
            </button>

            <div className="res-container">
              {
                listOfRestaurant.map((restaurant) => (
                  <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
              }
            </div>
        </div>
    );
}

export default Body;