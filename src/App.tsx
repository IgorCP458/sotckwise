import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import CadastroProdutos from "./pages/CadastroProdutos/CadastroProdutos";
import Company from "./pages/Company/Company";
import Login from "./pages/Login/Login";
import Stock from "./pages/Stock/Stock";
import Team from "./pages/Team/Team";
import { Sidebar } from "./components/Sidebar";
import Cadastro from "./pages/CadastroUser/Cadastro";
import Prices from "./pages/Prices/Prices";
import Solutions from "./pages/Solutions/Solutions";
import Resources from "./pages/Resources/Resources";
import Profile from "./pages/Profile/Profile";
import Subscription from "./pages/Subscription/Subscription";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<CadastroProdutos />} />
            <Route path="/company" element={<Company />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/team" element={<Team />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
