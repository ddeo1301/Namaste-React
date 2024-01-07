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
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.620006274691274%26lng%3D77.29885853827%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    )

     const json = await data.json();
     setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (!listOfRestaurant) return null;
  
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
                (res) => res.info.avgRating >= 4.2
              );
                setFilteredRestaurant(filteredList);
                console.log(filteredRestaurant)
            }}
          >
            Top Rated Restaurant
          </button>

            <div className="res-container">
              {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
                   <RestaurantCard  resData={restaurant}/>
                </Link>
              ))}
            </div>
        </div>
    );
}

export default Body;