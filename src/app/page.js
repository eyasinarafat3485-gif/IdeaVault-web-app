import Banner from "@/Components/Banner";
import PopularCategories from "@/Components/PopularCategories";
import TrendingIdeas from "@/Components/TrendingIdeas";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Banner />
      <PopularCategories />
      <TrendingIdeas />
    </div>
  );
}
