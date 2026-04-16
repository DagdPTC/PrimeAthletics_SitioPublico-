import Navbar from "../components/Navbar";
import HomeHero from "../components/Home/HomeHero";
import HomeCategories from "../components/Home/HomeCategory";
import HomeBanner from "../components/Home/HomeBanner";
import HomeProducts from "../components/Home/HomeProducts";
import HomeReviews from "../components/Home/HomeReviews";

function HomeScreen() {
  return (
    <>
      <HomeHero />
      <HomeCategories />
      <HomeBanner />
      <HomeProducts />
      <HomeReviews />
    </>
  );
}

export default HomeScreen;