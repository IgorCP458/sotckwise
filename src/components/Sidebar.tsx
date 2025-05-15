// src/components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom'
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from 'react'


export function Sidebar() {
  const location = useLocation()
  const path = location.pathname

  // Exemplo: esconder itens de menu em "/login" e "/cadastro"
  const showExtraItems = !['/login', '/cadastro'].includes(path)

  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if(e.clientX <= 10) {
        setVisible(true)
      } else if (e.clientX >= 260) {
        setVisible(false)
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
 
  }, [])


  return (
    <aside className={`h-screen top-0 w-64 bg-popover text-white flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0" : "-translate-x-full"}
        z-50`}>
      {/* Topo do menu */}

      <div className="content-center">
        <div className="logo-container pt-6 pb-5">
          <Link to="/" className='px-4 py-2'><span className='font-bold'>Stockwise</span></Link>
          <Separator className='mt-2'/>
        </div>
        <div className="">
          <Link to="/" className="block hover:bg-accent px-3 py-2">
            Dashboard
          </Link>

          <Link to="/produtos" className="block hover:bg-accent px-3 py-2">
            Produtos
          </Link>

          {showExtraItems && (
            <>
              <Link to="/clientes" className="block hover:bg-accent px-3 py-2">
                Clientes
              </Link>
              <Link to="/relatorios" className="block hover:bg-accent px-3 py-2">
                Relatórios
              </Link>
            </>
          )}
        </div>
      
      </div>
      
      

      {/* Base do menu */}
      <div className="space-y-2 text-sm text-gray-400 px-4 py-4">
        <Link to="/sobre" className="block hover:text-white">
          Quem Somos
        </Link>
        <Link to="/contato" className="block hover:text-white">
          Fale Conosco
        </Link>
        <Link to="/politica-privacidade" className="block hover:text-white">
          Política de Privacidade
        </Link>
        <Link to="/termos-uso" className="block hover:text-white">
          Termos de Uso
        </Link>
      </div>
    </aside>
  )
}
