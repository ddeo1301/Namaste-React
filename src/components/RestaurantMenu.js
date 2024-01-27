import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo.length === 0) return <Shimmer/>

    const {name, id, city, avgRating, costForTwoMessage, cuisines, sla} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    
    return(
        <div>
           <h1>{name}</h1>
           <p>
               {city} ---  {avgRating + "stars"} ---
               {cuisines.join(",")}  -- {sla.lastMileTravel + "km distance from your location"} -- 
                 {sla.deliveryTime + " min time to reach"}
            </p>
           <p></p>
           <h6>{"Rs." + costForTwoMessage}</h6>
           
           <ul>
              <h2 className="MenuCard">Menu</h2>
              <ul>
                {itemCards.map((item) => (
                    <li key = {item?.card?.info?.id}>
                       {item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                    </li>     
              ))}
              </ul>
            </ul>
        </div>
    )
}

export default RestaurantMenu;
