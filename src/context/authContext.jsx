import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const AuthContext = createContext(null);
export { AuthContext };

const API_URL = "http://localhost:4000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const clearSession = useCallback(() => {
    setUser(null);
  }, []);

  const logout = useCallback(
    async (options = {}) => {
      const reason = options?.reason || "manual";

      try {
        await fetch(`${API_URL}/logout`, {
          method: "POST",
          credentials: "include",
        });
      } catch (error) {
        // Error silencioso
      } finally {
        clearSession();
        navigate("/");

        if (reason === "expired") {
          toast.error("Tu sesión expiró. Inicia sesión nuevamente");
        } else {
          toast.success("Sesión cerrada correctamente");
        }
      }
    },
    [clearSession, navigate],
  );

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/loginCustomers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        return false;
      }

      setUser(data.user);
      toast.success(data.message);
      navigate("/");
      return true;
    } catch (error) {
      toast.error("Error al conectar con el servidor");
      return false;
    }
  };

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const response = await fetch(`${API_URL}/customers/me`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // la cookie viaja sola, no hace falta token
        });

        if (!response.ok) {
          if (isMounted) clearSession();
          return;
        }

        const payload = await response.json().catch(() => ({}));

        if (isMounted && payload?.user) {
          setUser(payload.user);
        }
      } catch (error) {
        if (isMounted) clearSession();
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [clearSession]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        login,
        loading,
        API: API_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
