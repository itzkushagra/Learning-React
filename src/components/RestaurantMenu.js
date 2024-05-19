import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{

    const {restInfo, setResInfo} = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    return restInfo==null ?<Shimmer />:(

        <div className="menu">
            <h1>Name of Rest</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Batata</li>
                <li>VadaPav</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;