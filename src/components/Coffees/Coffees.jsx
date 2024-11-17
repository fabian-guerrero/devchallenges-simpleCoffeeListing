import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import CoffeeItem from "../CoffeeItem/CoffeeItem";
import "./Coffees.css";

export default function Coffees() {
  const [soldOut, setSoldOut] = useState(false);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  );

  useEffect(() => {
    const filter = document.querySelector(".filters");
    const filterItems = document.querySelectorAll(".filters li");
    const filterActive = document.querySelector("li.active");
    const activeClass = "active";

    doCalculations(filterActive);

    for (const filterItem of filterItems) {
      filterItem.addEventListener("click", function (e) {
        e.preventDefault();
        e.target.id == "available" ? setSoldOut(true) : setSoldOut(false);
        filter.querySelector(".active").classList.remove(activeClass);
        filterItem.classList.add(activeClass);
        doCalculations(filterItem);
      });
    }

    function doCalculations(filterItem) {
      filter.style.setProperty("--transformJS", `${filterItem.offsetLeft}px`);
      filter.style.setProperty("--widthJS", `${filterItem.offsetWidth}px`);
    }
  }, [soldOut]);

  return (
    <section data-component="Coffees">
      <div className="coffees-filter">
        <ul className="dm-sans-label filters">
          <li className="active">
            <span id="all">All Products</span>
          </li>
          <li>
            <span id="available">Available Now</span>
          </li>
        </ul>
      </div>
      <ul className="list-wrapper">
        {data?.map((coffee) => (
          <CoffeeItem
            key={coffee.id}
            name={coffee.name}
            image={coffee.image}
            price={coffee.price}
            rating={coffee.rating}
            votes={coffee.votes}
            popular={coffee.popular}
            available={coffee.available}
            showCoffee={soldOut}
          />
        ))}
      </ul>
    </section>
  );
}
