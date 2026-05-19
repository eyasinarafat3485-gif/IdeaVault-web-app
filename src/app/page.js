import Banner from "@/Components/Banner";
import PopularCategories from "@/Components/PopularCategories";
import HowItWorks from "@/Components/HowItWorks";
import TrendingIdeas from "@/Components/TrendingIdeas";

export default function Home() {
  return (
    <div >
      <Banner />
      <TrendingIdeas />
      <PopularCategories />
      <HowItWorks />
    </div>
  );
}
