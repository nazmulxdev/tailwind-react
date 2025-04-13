import React from "react";
import { SquareChevronRight } from "lucide-react";
const PricingCard = ({ card }) => {
  console.log(card);
  return (
    <div className="card bg-primary text-primary-content m-4">
      <div className="card-body">
        <h2 className="card-title">{card.title}</h2>
        <p>{card.description}</p>
        <h3>Features</h3>
        <ul>
          {card.features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              {" "}
              <SquareChevronRight /> {feature}
            </li>
          ))}
        </ul>

        <div className="card-actions justify-between items-center ">
          <span>{card.price}</span>
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
