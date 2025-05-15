import { Separator } from '@/components/ui/separator';
import BigCard from "../../components/BigCard";

export default function Home() {
  return (
    <div className="h-full">
      <BigCard>
        <h1 className="text-2xl font-bold mb-1">Cadastro de Produtos</h1>
        <p className="text-muted-foreground mb-2">
          Possui algum produto novo se movimentando pela empresa? Cadastre-o aqui, é rápido e fácil
          (e ainda vai te poupar muito tempo!)
        </p>
        <Separator/>
      </BigCard>
    </div>
  );
}