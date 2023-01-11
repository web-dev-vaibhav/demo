import React from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import blockchain from "../../assets/blockchain.gif";
import web3 from "../../assets/web3.gif";
import shoping from "../../assets/shoping.gif";

const Services = () => {
  return (
    <>
      <div className="container pb-5" style={{ paddingTop: "90px" }}>
        <CardContainer
          id="service-blockchain-dev"
          imgUrl={blockchain}
          imgHeight={430}
          leftId="service-blockchain-dev-leftCard"
          rightId="service-blockchain-dev-rightCard"
          titleVisible={true}
          title="Services"
          subTitle="Blockchain Development"
          subDesc="A good Blockchain developer needs to be comfortable with a
            selection of programming languages. For instance, C++, SQL,
            JavaScript, and Python languages are good examples. If you are
            already proficient in a couple of them, then great!"
          subDivPadding={100}
          reverse={false}
        />
        <CardContainer
          id="service-web3-dev"
          imgUrl={web3}
          imgHeight={550}
          leftId="service-web3-dev-leftCard"
          rightId="service-web3-dev-rightCard"
          titleVisible={false}
          title="Services"
          subTitle="Web 3.0 Application"
          subDesc="Web 3.0 basically refers to a new set of principles for establishing the basic infrastructure for facilitating internet services and transactions. You can think of the best web3 applications as an innovative take on conventional applications with new value improvements."
          subDivPadding={150}
          reverse={true}
        />
        <CardContainer
          id="service-web3-shop"
          imgUrl={shoping}
          imgHeight={430}
          leftId="service-web3-shop-leftCard"
          rightId="service-web3-shop-rightCard"
          titleVisible={false}
          title="Services"
          subTitle="Web 3.0 E-commerce Services"
          subDesc="Open your door to the world of grilling with the sleek Spirit II E-210 gas grill. This two burner grill is built to fit small spaces, and packed with features such as the powerful GS4 grilling system, iGrill capability, and convenient side tables for placing serving trays. Welcome to the Weber family."
          subDivPadding={100}
          reverse={false}
        />
      </div>
    </>
  );
};

export default Services;
