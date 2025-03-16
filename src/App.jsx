import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./components/Gallery/Gallery"; // Corrected import
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero.jsx/Hero";
import Navbar2 from "./components/navbar/Navbar2";
import { useEffect } from "react";
import Service from "./components/Service/Service";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import Award from "./assets/award.jpg";
import Founder from "./assets/founder.jpg";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900">
        <Navbar2 />
      </div>
      <section id="home">
        <Hero />
      </section>
      <section id="contact">
        <Service />
      </section>
      <BannerDetails
        reverse={false}
        img={Founder}
        title="Founder of Raviteja Textiles"
        description="Raviteja Textiles was founded with a vision to revolutionize the textile industry in Davanagere. Our founder's passion for quality and dedication to customer satisfaction has shaped the brand's identity. Under their leadership, we have grown from a small establishment to a trusted name in Karnataka, known for blending tradition with modern trends."
      />
      <BannerDetails
        reverse={true}
        img={Award}
        title="Why Choose Raviteja Textiles?"
        description="We are committed to offering premium quality fabrics, exceptional customer service, and a diverse range of products. Raviteja Textiles has been recognized with prestigious awards like the Suvarna Sadakaru Award for Best Quality Product Sellers, highlighting our dedication to excellence."
      />
      <Banner />
      <Blogs />
      <section id="branches">
        <Gallery />
      </section>
      <Footer />
    </div>
  );
}

export default App;