import { Link } from "react-router-dom";
import LoginButton from "./ui/LoginButton";

function Navbar() {
  return (
    <div className="navbar-div h-12 content-center flex items-center p-4 flex-row justify-between">
      <div></div>
      <div className="nav-menu flex  h-full content-center">
        <Link to="/stock" className="px-4 py-2">
          Estoque
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
}

export default Navbar;
