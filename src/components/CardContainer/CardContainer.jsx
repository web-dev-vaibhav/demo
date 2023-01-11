import React, { useEffect, useState } from "react";
import "./CardContainer.css";

const CardContainer = (prop) => {
  const {
    id,
    imgUrl,
    imgHeight,
    leftId,
    rightId,
    titleVisible,
    title,
    subDivPadding,
    subTitle,
    subDesc,
    reverse,
  } = prop;

  return (
    <>
      <div id={id} className="maidiv row">
        {titleVisible ? (
          <div className="col-12 py-5 text-center">
            <a className="mainTitle">{title}</a>
          </div>
        ) : (
          ""
        )}
        <div
          className={`col-12 d-flex ${reverse ? "flex-row-reverse" : ""} row`}
        >
          <div id={leftId} className={`col-6 text-center leftCard leftCard-anim`}>
            <img
              className="blockchain"
              style={{ height: `${imgHeight}px` }}
              src={imgUrl}
              alt=""
            />
          </div>
          <div
            id={rightId}
            className="col-6 rightCard rightCard-anim text-light"
            style={{ paddingTop: subDivPadding }}
          >
            <span className="title mx-auto py-3">{subTitle}</span>
            <br />
            <br />
            <p className="desc">{subDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
