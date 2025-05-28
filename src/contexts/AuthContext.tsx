import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Checa o token no cookie/localStorage ao iniciar
  useEffect(() => {
    fetch("http://localhost:8080/api/auth/check", {
      credentials: "include", // permite enviar o cookie
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAuthenticated(data.loggedIn);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    navigate('/company')
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar no seu app
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};
