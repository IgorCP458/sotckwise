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


function LoginButton () {
  return(
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
        <Button variant="outline" className='pl-2 py-4 hover:cursor-pointer focus:outline-none focus:outline-none focus:ring-0 focus:shadow-none'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
            Igor
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to="/profile"><DropdownMenuItem>Profile</DropdownMenuItem></Link>
          <Link to="/billing"><DropdownMenuItem>Billing</DropdownMenuItem></Link>
          <Link to="subscription"><DropdownMenuItem>Subscription</DropdownMenuItem></Link>
        </DropdownMenuContent>
      </DropdownMenu>
      
      
  
    </>
  )
}

export default LoginButton;