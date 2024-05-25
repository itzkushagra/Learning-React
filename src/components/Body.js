import Header from "./Header";
import ResCard from "./Restcard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";


const Body = () => {

  const [listOfRestaurant,setListOfRestaurant] = useState([]);
  const [filteredRest,setFilteredRest] = useState([]);
  const [searchText,setSearchText]=useState("");

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
    console.log(listOfRestaurant)
    setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)
  };

  return listOfRestaurant.length==0 ? <Shimmer />:(
    <div className="body">
      <div className="filter">
        <div className="search">
            
          <input 
          type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />

          <button 
          className="search-btn" 
          onClick={()=>{
            const filteredRest = listOfRestaurant.filter(
              (res) => res.info.name.toLowerCase().includes(searchText));  

            setFilteredRest(filteredRest);
          }}>Search</button>
        
        </div>
        
        <button className="filter-btn" onClick={()=>{
            const filteredRest = listOfRestaurant.filter((res) => res.info.avgRating>4);
            setListOfRestaurant(filteredRest);
        }}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="rest_cont">
        { 
          
          filteredRest.map((restaurant) => {
            return <ResCard {...restaurant.info} key={restaurant.info?.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Body;
