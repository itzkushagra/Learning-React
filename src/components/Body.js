import Header from "./Header";
import ResCard from "./Restcard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

  let [listOfRestaurant,setListOfRestaurant] = useState([
    {
      "info": {
        "id": "47597",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Evershine Tower",
        "areaName": "Vaishali Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 9,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "9.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-24 04:00:00",
          "opened": true
        }
    }},
    {
      "info": {
        "id": "45606",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "092e58460657922e098a8afd5db838fe",
        "locality": "Jhotwara",
        "areaName": "Jhotwara",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "2456",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-02-23 23:59:00",
          "opened": true
        }
    }}
  ]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log
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
            return <ResCard info={restaurant.info} key={restaurant.info.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Body;
