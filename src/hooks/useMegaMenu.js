import { useEffect, useState } from "react";
import { getMenuCategories } from "../services/categoriesService.js";

export const useMegaMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenuCategories();
        setMenuData(data);
      } catch (error) {
        console.error(error);
        setMenuData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return { menuData, loading };
};
