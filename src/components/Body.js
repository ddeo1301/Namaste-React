import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false){
      return (
         <h1>Looks Like you are offline 😃😃😃😃😃😃</h1>
      )
   }

   if (!listOfRestaurant) return null;
  
    return listOfRestaurant?.length === 0 ? <Shimmer/> : (
        <div className="body">
          <div className="filter flex">
            <div className="search m-4 p-4">
              <input 
                type="text" 
                className="border border-solid border-black"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              
              <button className="px-4 py-2 bg-green-100 m-4 rounded-xl"
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
            <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" 
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
            </div>
          </div>

            <div className="flex flex-wrap">
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