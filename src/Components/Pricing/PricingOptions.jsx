import { Heading1 } from "lucide-react";
import React from "react";
import { Suspense } from "react";
import PricingCard from "./PricingCard";

const PricingOptions = ({ pricing }) => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto">
          {pricing.map((card) => (
            <PricingCard key={card.id} card={card}></PricingCard>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default PricingOptions;
