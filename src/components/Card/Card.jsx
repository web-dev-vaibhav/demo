import "./Card.css";
import React from "react";

const Card = (props) => {
  const { id, imgUrl, imgHeight, title } = props;
  return (
    <>
      <div id={id} className="myCard my-5 mx-3">
        <div className="div-img">
          {/*default height should be 250px */}
          <img src={imgUrl} style={{ height: `${imgHeight}px` }} alt="" />
        </div>
        <div className="div-txt">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
