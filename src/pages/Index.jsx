import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import PaymentMethods from "@/components/PaymentMethods";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
