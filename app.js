import React from "react";
import ReactDOM from "react-dom";
import kaka from './images/kaka.avif';

const Header = ()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" alt="nhi aarhi"/>      
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restObj = {
  type: "restaurant",
  data: {
    id: "90186",
    "name": "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Amrapali Marg",
    areaName: "Vaishali Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
      "Burgers",
      "American"
    ],
    avgRating: 4.3,
    parentId: "166",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 41,
      lastMileTravel: 7.3,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "7.3 km",
      iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
      nextCloseTime: "2024-02-17 04:00:00",
      opened: true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹129"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-amrapali-marg-vaishali-nagar-jaipur-90186",
    "type": "WEBLINK"
  }
}


const Rescard = (props)=>{
  const {resData}= props;
  return(
    <div className="rest-card">
      <img className="rest_img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.data.cloudinaryImageId} alt="kuch toh hai"/>
      <h4>{resData.data.name}</h4>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>Rating: {resData.data.avgRating}</h4>
      <h4>{resData.data.sla.slaString}</h4>
      <h4>{resData.data.costForTwo}</h4>
    </div>
  );
};

const Body = ()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest_cont">
        <Rescard resData={restObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);     
