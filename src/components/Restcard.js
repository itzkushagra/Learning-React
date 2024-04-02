  import { CDN_URL } from "../utils/constants"; //NAMED EXPORT
  
  const ResCard = ( { 
    cloudinaryImageId, 
    name, 
    cuisines, 
    avgRating, 
    sla, 
    costForTwo 
  } ) => {
  console.log(  
    cloudinaryImageId 
   )

  return (
    <div className="rest-card">
      <img className="rest_img" src={CDN_URL + cloudinaryImageId} alt="kuch toh hai" />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4> 
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResCard;