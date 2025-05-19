import { Link } from "react-router-dom";
import LoginButton from "./ui/LoginButton";
import { useAuth } from "@/contexts/AuthContext";

function Navbar() {

  const { isAuthenticated, logout } = useAuth();

  if(isAuthenticated) {
    return (
      <div className="navbar-div h-12 content-center flex items-center p-4 flex-row justify-between">
        <div></div>
        <div className="nav-menu flex  h-full content-center">
          <Link to="/stock" className="px-4 py-2">
            Estoque {isAuthenticated}
          </Link>
          <Link to="/produtos" className="px-4 py-2">
            Cadastro de Produtos
          </Link>
          <Link to="/team" className="px-4 py-2">
            Time
          </Link>
          <Link to="/company" className="px-4 py-2">
            Minha Empresa
          </Link>
          <LoginButton></LoginButton>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar-div h-12 content-center flex items-center p-4 flex-row justify-between">
        <div></div>
        <div className="nav-menu flex  h-full content-center">
          <Link to="/solutions" className="px-4 py-2">
            Soluções
          </Link>
          <Link to="/resources" className="px-4 py-2">
            Recursos
          </Link>
          <Link to="/prices" className="px-4 py-2">
            Preços
          </Link>
          <LoginButton></LoginButton>
        </div>
      </div>
    );
  }

  
}

export default Navbar;
