const API = "http://localhost:4000/api/news";

export const getFeaturedNews = async () => {
  const response = await fetch(`${API}/featured/banner`);

  if (!response.ok) {
    throw new Error("Error al obtener banner");
  }

  return await response.json();
};

export const getRecentCollaborations = async () => {
  const response = await fetch(`${API}/recent/collaborations`);

  if (!response.ok) {
    throw new Error("Error al obtener colaboraciones");
  }

  return await response.json();
};

export const getUpcomingReleases = async () => {
  const response = await fetch(`${API}/upcoming/releases`);

  if (!response.ok) {
    throw new Error("Error al obtener lanzamientos");
  }

  return await response.json();
};