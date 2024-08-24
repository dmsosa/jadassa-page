import { useEffect } from "react";
import { useGod } from "../context/GodContext";
import Flower from "../components/Flower/Flower";
import GodToggler from "../components/GodToggler";

function FlowerPage() {
  const { withGod } = useGod();

  useEffect(() => {}, []);
  return (
    <div className="page flower-page">
      <GodToggler />
      <div className="container">
        <div className="row">
          <h1>Today is Jdss&#39;s {`${withGod ? "Tag" : "Nacht"}`}</h1>
          <p className="subtitle">This is your very very happy birthday!</p>
        </div>
        <div className="row">
          <Flower withGod={withGod} />
        </div>
        <p className="footer">Always remember to be with Him</p>
      </div>
    </div>
  );
}

export default FlowerPage;
