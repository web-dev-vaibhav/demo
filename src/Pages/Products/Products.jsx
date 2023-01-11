import React from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import cryexch from "../../assets/cryexch.gif";
import mobile_dev from "../../assets/mobile_dev.gif";
import bitcoin from "../../assets/bitcoin1.gif";

const Products = () => {
  return (
    <>
      <div className="container pb-5" style={{ paddingTop: "90px" }}>
        <CardContainer
          id="crypto-exchange"
          imgUrl={cryexch}
          imgHeight={350}
          leftId="crypto-exchange-leftCard"
          rightId="crypto-exchange-rightCard"
          titleVisible={true}
          title="Products"
          subTitle="Crypto Exchanges"
          subDesc="A crypto exchange is a platform for buying and selling cryptocurrencies. In addition to trading services, crypto exchanges also offer price discovery through trading activity, as well as storage for crypto."
          subDivPadding={130}
          reverse={false}
        />
        <CardContainer
          id="service-web3-dev"
          imgUrl={mobile_dev}
          imgHeight={400}
          leftId="service-web3-dev-leftCard"
          rightId="service-web3-dev-rightCard"
          titleVisible={false}
          title="Services"
          subTitle="Customized Mobile App"
          subDesc="Web 3.0 basically refers to a new set of principles for establishing the basic infrastructure for facilitating internet services and transactions. You can think of the best web3 applications as an innovative take on conventional applications with new value improvements."
          subDivPadding={65}
          reverse={true}
        />
        <CardContainer
          id="service-web3-shop"
          imgUrl={bitcoin}
          imgHeight={400}
          leftId="service-web3-shop-leftCard"
          rightId="service-web3-shop-rightCard"
          titleVisible={false}
          title="Services"
          subTitle=" Crypto Investment Platform"
          subDesc="Open your door to the world of grilling with the sleek Spirit II E-210 gas grill. This two burner grill is built to fit small spaces, and packed with features such as the powerful GS4 grilling system, iGrill capability, and convenient side tables for placing serving trays. Welcome to the Weber family."
          subDivPadding={65}
          reverse={false}
        />
      </div>
    </>
  );
};

export default Products;
