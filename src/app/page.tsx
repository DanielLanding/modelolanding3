import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex-col flex overflow-hidden">
      <Hero />
      <Portfolio />
      <Reviews />
      <Footer />
    </main>
  );
}
