import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { CircleDollarSign, LogIn, LogOut, User, UserPen } from "lucide-react";


function ProfileButton () {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return(
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="outline" className='pl-2 py-4 hover:cursor-pointer focus:outline-none focus:outline-none focus:ring-0 focus:shadow-none'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
            Igor
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to="/profile"><DropdownMenuItem><UserPen/>Perfil</DropdownMenuItem></Link>
          <Link to="/subscription"><DropdownMenuItem><CircleDollarSign/>Compras e Assinaturas</DropdownMenuItem></Link>
          <Link to="/login"><DropdownMenuItem><LogOut/>Sair</DropdownMenuItem></Link>
        </DropdownMenuContent>
      </DropdownMenu>       
    </>
  )
}

export default ProfileButton;