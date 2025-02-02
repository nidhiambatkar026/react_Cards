export default function MenuCard(props){
    const {title , imagUrl, price, rating, isveg} = props;
    return(
        <div className="card">
           <img src = {imagUrl} alt="imageUrl" className="food-card"/>
           <div className="food_info">
              <h2 className="food_title">{title}</h2>
              <h2 className="check">{isveg}</h2>
              <p className="food_price">{price}</p>
              <p className="food_rating">{rating}</p>
           </div>
        </div>
    )
}