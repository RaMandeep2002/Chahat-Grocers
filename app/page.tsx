import Categories from "./components/Categories";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Headers />
      <Hero />
      <Categories />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
