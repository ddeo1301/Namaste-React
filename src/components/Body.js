import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function filterData(searchText, listOfRestaurant) {
  const filterData = listOfRestaurant.filter((res) => (
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  ));
  return filterData;
}

const Body = () => {
   const [listOfRestaurant, setListOfRestaurant] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
   const [searchText, setSearchText] = useState([]);

   useEffect(() => {
    fetchData() ;
   }, [])

  //  const fetchData = async() => {
  async function fetchData() {
    const data = await fetch("https://kind-puce-bull-tie.cyclic.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
     
     const json = await data.json();
     setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     console.log("Filtered restaurant list" + filteredRestaurant);
     console.log("All restaurant list" + listOfRestaurant);
  }

  if (!listOfRestaurant) return null;
  if (filteredRestaurant?.length === 0)
    return <h1>No Restraunt match your Filter!!</h1>;
  
    return listOfRestaurant?.length === 0 ? <Shimmer/> : (
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
                   setFilteredRestaurant(filterData(searchText, listOfRestaurant))
                   console.log("search button" + filteredRestaurant);
                 }}
              >
                Search
              </button>
            </div>
          </div>

          <button className="filter-btn" 
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating >= 4.5
              );
                setFilteredRestaurant(filteredList);
                console.log(filteredRestaurant)
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