import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Categories from "@/components/Categories";
import Editorial from "@/components/Editorial";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <NewArrivals />
      <Categories />
      <Editorial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
