import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import VitrineCTA from "@/components/VitrineCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Products />
      <VitrineCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
