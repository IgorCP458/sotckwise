import { CadastroForms } from "@/components/CadastroForms"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"

export default function Cadastro () {
  return (
    <div className="justify-items-center h-full content-center">
      <Card className="w-full md:w-1/3">
        <CardHeader>
          <CardTitle><h1 className="text-2xl font-bold mb-1">Cadastre-se</h1></CardTitle>
          <CardDescription>
            <p className="text-muted-foreground mb-2">
              Vamos criar uma conta! É rápido e fácil!
            </p>
          </CardDescription>
          <Separator/>
        </CardHeader>
        <CardContent>
          <CadastroForms/>
        </CardContent>
      </Card>

    </div>
  )
}