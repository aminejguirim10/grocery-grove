import HomeDelicious from "@/components/app/home-delicious";
import HomeFeatures from "@/components/app/home-features";
import HomeFresh from "@/components/app/home-fresh";
import HeroSection from "@/components/app/home-hero";
import HomeNewsLetter from "@/components/app/home-newsletter";
import HomePorducts from "@/components/app/home-products";
import HomeSteps from "@/components/app/home-steps";
import HomeTestimonials from "@/components/app/home-testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeFeatures />
      <HomeFresh />
      <HomeSteps />
      <HomeTestimonials />
      <HomePorducts />
      <HomeDelicious />
      <HomeNewsLetter />
    </main>
  );
}
