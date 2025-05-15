import { Separator } from '@/components/ui/separator';
import BigCard from "../../components/BigCard";

export default function Home() {
  return (
    <div className="h-full">
      <BigCard>
        <h1 className="text-2xl font-bold mb-1">Empresa</h1>
        <p className="text-muted-foreground mb-2">
          Resumos, gráficos, anotações importantes do seu time, tudo o que você precisa saber! 
        </p>
        <Separator/>
      </BigCard>
    </div>
  );
}