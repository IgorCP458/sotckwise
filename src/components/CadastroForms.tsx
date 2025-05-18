import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label"; 
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useNavigate } from "react-router-dom";


const cadastroFormsSchema = z.object({
  name: z.string().min(2, {message: "Insira um nome válido"}),
  surname: z.string().min(2, {message: "Insira um sobrenome válido"}),
  email: z.string().email({message: "Insira um e-mail válido"}),
  password: z.string().min(8, {message: "A senha deve conter 8-16 caracteres"}).max(16),
  password_repeat: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar os termos e condições"
  }),
  receive_emails: z.boolean(), 
})
.refine((data) => data.password === data.password_repeat, {
    message: "As senhas não coincidem",
    path: ["password_repeat"], // Marca o erro no campo correto
            
  });


type CadastroFormsSchema = z.infer<typeof cadastroFormsSchema>


export function CadastroForms() {

  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState('')

  const navigate = useNavigate();


  const { register, handleSubmit, control, formState: { errors } } = useForm<CadastroFormsSchema>({
    resolver: zodResolver(cadastroFormsSchema),
    defaultValues: {
      receive_emails: true,
      terms: false,
    },
  });

  async function handleCadastro(data: CadastroFormsSchema) {
    try {
        const response = await fetch("http://localhost:8080/api/cadastro-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if(!response.ok) {
        const result = await response.json()
        setFormError(result.message);
        return;
      }

      setFormError('')
      if(response.ok) {
        console.log("Resposta aceita")
      }

    } catch (error) {
      console.log("Erro no cadastro", error);
      setFormError("Erro ao conectar com o servidor.");
    }
    
  }

  return(
    <form onSubmit={handleSubmit(handleCadastro)}>
      {formError && (
        <Alert className="mb-4" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro!</AlertTitle>
          <AlertDescription>
            {formError}
          </AlertDescription>
        </Alert>
      )}
        
          <div className="grid w-full items-center gap-4 space-y-4">
            <div className="flex flex-row space-x-4">
              <div className="flex w-1/3 flex-col space-y-1.5">
                <Label>Nome</Label>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
                <Input placeholder="Seu primeiro nome" {...register('name')}/>
              </div>
              <div className="flex w-1/3 flex-col space-y-1.5">
                <Label>Sobrenome</Label>
                {errors.surname && (
                  <p className="text-red-500 text-sm">{errors.surname.message}</p>
                )}
                <Input placeholder="Seu sobrenome" {...register('surname')}/>
              </div>
            </div>
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
                {errors.password_repeat && (
                  <p className="text-red-500 text-sm">{errors.password_repeat.message}</p>
                )}
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
                <div className="flex flex-row space-x-2">
                <Input 
                  placeholder="Uma senha forte" 
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
                <Input 
                  placeholder="Confirma a sua senha" 
                  {...register('password_repeat')}
                  type={showPassword ? 'text' : 'password'}
                  className="w-3/4"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 pt-6">
        <Controller
          name="receive_emails"
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="receive_emails"
            />
          )}
        />
        <label htmlFor="receive_emails" className="text-sm font-medium leading-none">
          Quero receber novidades e promoções via e-mail.
        </label>
      </div>

      {/* Checkbox: termos */}
      <div className="flex items-center space-x-2 pt-6">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="terms"
            />
          )}
        />
        <label htmlFor="terms" className="text-sm font-medium leading-none">
          Declaro que li e aceito os Termos e Condições
        </label>
      </div>
      {errors.terms && (
        <p className="text-red-500 text-sm pt-1">{errors.terms.message}</p>
      )}
          
          <div className=" py-6 flex justify-between w-1/2 space-x-4">
            <Button variant="outline" type="button" onClick={() => {
              navigate('/')
            }}>Cancelar</Button>
            <Button type="submit">Cadastrar</Button>
          </div>
          
    </form>
  )
}