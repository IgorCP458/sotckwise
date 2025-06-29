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


function LoginButton () {

  return(
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="outline" className='pl-2 py-4 hover:cursor-pointer focus:outline-none focus:outline-none focus:ring-0 focus:shadow-none'>
            <LogIn />
            Fazer login
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link to="/login"><DropdownMenuItem><LogIn />Fazer Login</DropdownMenuItem></Link>
          <Link to="/cadastro"><DropdownMenuItem><User/>Cadastre-se</DropdownMenuItem></Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LoginButton;