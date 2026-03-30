"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.log("Auth error:", res.status, text);
          setUser("");
          setLoading(false);
          return;
        }
        const data = await res.json();
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setUser("");
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
