import starFill from "../../assets/star-fill.svg";
import star from "../../assets/star.svg";

import "./CoffeeItem.css";

export default function CoffeeItem({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
  showCoffee,
}) {
  return (
    <li
      data-component="coffee-items"
      className={
        showCoffee == true && available === false
          ? "hide-coffee"
          : "show-coffee"
      }
    >
      <div className="image-wrapper">
        <img className="image" src={image} />
        {popular && (
          <span className="popular-tag dm-sans-small-text">Popular</span>
        )}
      </div>
      <div className="details-wrapper">
        <div className="name-wrapper">
          <p className="dm-sans-body">{name}</p>
          <p className="price dm-sans-price-text">{price}</p>
        </div>
        <div className="price-wrapper">
          {rating ? (
            <p className="rating dm-sans-label">
              <img className="rating-star" src={starFill} />
              {rating} <span className="votes-count">({votes} Votes)</span>
            </p>
          ) : (
            <p className="rating">
              <img className="rating-star" src={star} />
              {rating}{" "}
              <span className="votes-count dm-sans-label">No ratings</span>
            </p>
          )}
          {!available && <p className="sold-out dm-sans-label">Sold Out</p>}
        </div>
      </div>
    </li>
  );
}

// {
//     "id": 1,
//     "name": "Cappuccino",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
//     "price": "$5.20",
//     "rating": 4.7,
//     "votes": 65,
//     "popular": true,
//     "available": true
//     },
