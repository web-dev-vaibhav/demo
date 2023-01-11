import React from "react";
import { Link, to } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import Card from "../../components/Card/Card";
import service from "../../assets/service.gif";
import service2 from "../../assets/service2.gif";
import game from "../../assets/game.gif";

const Home = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: "90px" }}>
        <HomeCard />
        <div className="col-12 d-flex justify-content-around py-5">
          <Link to={"/services"}>
            <Card
              id="card-service"
              imgUrl={service2}
              imgHeight={250}
              title="Services"
            />
          </Link>
          <Link to={"/products"}>
            <Card
              id="card-products"
              imgUrl={service}
              imgHeight={250}
              title="Products"
            />
          </Link>
          <Link to={"/games"}>
            <Card id="card-games" imgUrl={game} imgHeight={250} title="Games" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
