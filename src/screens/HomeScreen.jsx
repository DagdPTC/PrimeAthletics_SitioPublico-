import Navbar from "../components/Navbar";
import HomeHero from "../components/Home/HomeHero";
import HomeCategories from "../components/Home/HomeCategory";
import HomeBanner from "../components/Home/HomeBanner";
import HomeProducts from "../components/Home/HomeProducts";

function HomeScreen() {
  return (
    <>
      <HomeHero />
      <HomeCategories />
      <HomeBanner />
      <HomeProducts />
    </>
  );
}

export default HomeScreen;