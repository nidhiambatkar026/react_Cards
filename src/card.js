import './card.css'

export default function MenuCard(props){
    const {title , imagUrl, price, rating, isveg} = props;
    return(
        <div className="card">
           <img src = {imagUrl} alt="imageUrl" className="food-card"/>
           <div className="food_info">
              <h2 className="food_title">{title}</h2>
              <p className="food_price">Price:{price}</p>
              <p className="food_rating">Ratings:{rating}</p>
           </div>
        </div>
    )
}