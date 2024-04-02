import Header from "./Header";
import ResCard from "./Restcard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

  let [listOfRestaurant,setListOfRestaurant] = useState(resList);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)   
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{

          filteredList=listOfRestaurant.filter(res=>
            res.info.avgRating>4
            );

            setListOfRestaurant(filteredlist) 

        }}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="rest_cont">
        { 
          
          listOfRestaurant.map((restaurant) => {
            return <ResCard {...restaurant.info} key={restaurant.info?.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Body;
