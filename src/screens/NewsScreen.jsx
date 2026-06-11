import { useEffect, useState } from "react";

import NovedadesHero from "../components/novedades/NovedadesHero";
import NovedadesCards from "../components/novedades/NovedadesCards";
import Lanzamientos from "../components/novedades/Lanzamientos";

function NovedadesScreen() {

  const [hero, setHero] = useState(null);
  const [cards, setCards] = useState([]);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {

    const loadNews = async () => {
      try {

        const [
          featuredResponse,
          collaborationsResponse,
          launchesResponse
        ] = await Promise.all([
          fetch("http://localhost:4000/api/news/featured/banner"),
          fetch("http://localhost:4000/api/news/recent/collaborations"),
          fetch("http://localhost:4000/api/news/upcoming/releases")
        ]);

        const featured = await featuredResponse.json();
        const collaborations = await collaborationsResponse.json();
        const upcoming = await launchesResponse.json();

        setHero(featured.data);
        setCards(collaborations.data);
        setLaunches(upcoming.data);

      } catch (error) {
        console.error("Error cargando novedades:", error);
      }
    };

    loadNews();

  }, []);

  return (
    <div className="px-10 py-6 space-y-10">

      <NovedadesHero hero={hero} />

      <NovedadesCards cards={cards} />

      <Lanzamientos products={launches} />

    </div>
  );
}

export default NovedadesScreen;