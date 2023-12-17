// import RestaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
   const [listOfRestaurant, setListOfRestaurant] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
   const [searchText, setSearchText] = useState("");

   useEffect(() => {
    fetchData();
   }, [])

   const fetchData = async() => {
     const data = await fetch(
      // "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.620006274691274&lng=77.29885853827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       "https://kind-puce-bull-tie.cyclic.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
     );
     
     const json = await data.json();
    //  console.log(json)
    //  console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);
    //  console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.id);
     setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
  
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input 
                type="text" 
                className="search-box"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              
              <button
                 onClick={() => {
                   //Filter the restaurant cards and update the UI
                   //searchText
                   const filteredRestaurant = listOfRestaurant.filter((res) => {
                     res.info.name.toLowerCase().includes(searchText.toLowerCase());
                   })
                   setFilteredRestaurant(filteredRestaurant);
                 }}
              >
                Search
              </button>
            </div>
          </div>

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
              {filteredRestaurant.map((restaurant) => (
                 <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
              ))}
            </div>

        </div>
    );
}

export default Body;