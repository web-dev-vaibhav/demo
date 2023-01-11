import React from "react";
import card from "../../assets/crypto_animation.gif";
import bitcoin1 from "../../assets/bitcoin_1.gif";
import "./HomeCard.css";

const HomeCard = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 row px-5">
          <div className="col-6 intro-text">
            <p>
              Make your life <br /> easier with <br /> crypto{" "}
              <img
                className="img-bitcoin"
                src={bitcoin1}
                alt=""
                style={{"height" : "90px"}}
              />
            </p>
            <button className="myBtn">Let's Go</button>
          </div>
          <div className="col-6 text-center">
            <img className="img-card" src={card} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
