import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label"; 
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { fetchWithAuth } from "@/utils/fetchWithAuth";


const loginFormsSchema = z.object({
  email: z.string().email({message: "Insira um e-mail válido"}),
  password: z.string(),
})

type LoginFormsSchema = z.infer<typeof loginFormsSchema>


export function LoginForms() {

  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState('')
  const navigate = useNavigate()
  const { login, logout } = useAuth()


  useEffect(() => {
    logout()
  }, [])

  

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormsSchema>({
    resolver: zodResolver(loginFormsSchema),
  });

  async function handleLogin(data: LoginFormsSchema) {
    const response = await fetchWithAuth("http://localhost:8080/api/login-user", {
      method: "POST",
      body: JSON.stringify(data),
    })

    if(response.ok) {
      login()
    } else {
      console.log("Erro no login")

    }
  }

  return(
    <form onSubmit={handleSubmit(handleLogin)}>
      {formError && (
        <Alert className="mb-4" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro!</AlertTitle>
          <AlertDescription>
            {formError}
          </AlertDescription>
        </Alert>
      )}
        
          <div className="grid w-full items-center gap-4 space-y-2">
            <div className="flex flex-col space-y-1.5">
              <Label>E-mail</Label>
              {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              <Input placeholder="Seu e-mail" {...register('email')}/>
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Senha</Label>
              <div className="space-y-4">
              
                <div className="flex flex-row space-x-2">
                <Input 
                  placeholder="Sua senha" 
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="w-3/4"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className=""
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                </div>
              </div>
            </div>
          </div>        
          <div className=" py-6 flex justify-between w-1/2 space-x-4">
            <Button type="submit">Login</Button>
          </div>
          
    </form>
  )
}