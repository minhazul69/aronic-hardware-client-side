import React from "react";
import ClientTrust from "./ClientTrustSection/ClientTrust";
import Contact from "./Contact/Contact";
import HomeBanner from "./HomeBanner/HomeBanner";
import Offer from "./OfferSection/Offer";
import Products from "./Products/Products";
import ReviewSection from "./ReviewSection/ReviewSection";
import Subscribe from "./SubscribeSection/Subscribe";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Offer />
      <ClientTrust />
      <Products />
      <Subscribe />
      <ReviewSection />
      <Contact />
    </div>
  );
};

export default Home;
