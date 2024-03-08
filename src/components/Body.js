import Header from "./Header";
import ResCard from "./Restcard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          console.log("Button Clicked");
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest_cont">
        {
          resList.map((restaurant) => {
            return <ResCard info={restaurant.info} key={restaurant.info.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Body;
