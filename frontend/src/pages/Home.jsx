import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import SignupEmail from "../components/SignupEmail";
import TopSellers from "../components/TopSellersSection";
import AboutSection from "../components/aboutSection";
import CategorySection from "../components/CategorySection";
import ServiceSection from "../components/ServiceSection";
import AuthPopup from "../components/AuthPopup";

function Home() {
  return (
    <div>
      <Hero />
      <main className="w-full max-w-screen-xl mx-auto pt-[80px] pb-24">
        <CategorySection />
        <AboutSection />
        <FeaturedSection />
        <TopSellers />
        <ServiceSection />
        <SignupEmail />
        <AuthPopup/>
      </main>
    </div>
  );
}

export default Home;
