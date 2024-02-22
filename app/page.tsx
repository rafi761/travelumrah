import AboutUs from "./components/AboutUs";
import CardUmrah from "./components/CardUmrah";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ResponsiveAppBar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#B9B4C7]">
      <ResponsiveAppBar />
      <Hero />
      <AboutUs />
      <CardUmrah />
      <Footer />
    </main>
  );
}
