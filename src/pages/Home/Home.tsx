import { Separator } from '@/components/ui/separator';
import BigCard from "../../components/BigCard";

export default function Home() {
  return (
    <div className="h-full">
      <BigCard>
        <h1 className="text-2xl font-bold mb-1">Home</h1>
        <p className="text-muted-foreground mb-2">
          Bem-vindo ao StockWise! Aqui você pode acompanhar tudo.
        </p>
        <Separator/>
      </BigCard>
    </div>
  );
}