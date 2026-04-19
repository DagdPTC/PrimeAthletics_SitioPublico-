import Navbar from "../components/Navbar";
import NovedadesHero from "../components/novedades/NovedadesHero";
import NovedadesCards from "../components/novedades/NovedadesCards";
import Lanzamientos from "../components/novedades/Lanzamientos";

function NovedadesScreen() {
  return (
    <>
        <div className="px-10 py-6 space-y-10">
        <NovedadesHero />
        <NovedadesCards />
        <Lanzamientos />
      </div>
    </>
  );
}

export default NovedadesScreen;