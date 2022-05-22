import React from "react";
import ClientTrust from "./ClientTrustSection/ClientTrust";
import HomeBanner from "./HomeBanner/HomeBanner";
import Offer from "./OfferSection/Offer";
import ReviewSection from "./ReviewSection/ReviewSection";
import Subscribe from "./SubscribeSection/Subscribe";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Offer />
      <ClientTrust />
      <Subscribe />
      <ReviewSection />
    </div>
  );
};

export default Home;
