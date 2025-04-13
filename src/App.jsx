import { Suspense, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import CustomizedNavBar from "./Components/NavBar/CustomizedNavBar";
import PricingOptions from "./Components/Pricing/PricingOptions";
import ResultsChart from "./Components/ResultsChart/ResultsChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

const navData = async () => {
  const response = await fetch("navdata.json");
  return response.json();
};

const marksPromise = axios.get("marksData.json");
function App() {
  const navPromise = navData();

  const [pricing, setPricing] = useState([]);
  useEffect(() => {
    const loadPricing = async () => {
      const response = await fetch("gym_pricing_plans.json");
      const data = await response.json();
      return setPricing(data);
    };
    loadPricing();
  }, []);
  return (
    <> 
      <Suspense>
        <CustomizedNavBar navData={navPromise}></CustomizedNavBar>
      </Suspense>
      {/* <NavBar></NavBar> */}
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PricingOptions pricing={pricing}></PricingOptions>
      </Suspense>
      <ResultsChart></ResultsChart>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
    </>
  );
}

export default App;
