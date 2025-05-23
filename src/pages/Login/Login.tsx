import { LoginForms } from "@/components/LoginForms"
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
          <CardTitle><h1 className="text-2xl font-bold mb-1">Login</h1></CardTitle>
          <CardDescription>
            <p className="text-muted-foreground mb-2">
              Que bom que você voltou! Após o login você já pode desfrutar dos nossos serviços
            </p>
          </CardDescription>
          <Separator/>
        </CardHeader>
        <CardContent>
          <LoginForms/>
        </CardContent>
      </Card>

    </div>
  )
}