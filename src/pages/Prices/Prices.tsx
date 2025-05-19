import { Separator } from '@/components/ui/separator';
import BigCard from "../../components/BigCard";

export default function Prices() {
  return (
    <div className="h-full">
      <BigCard>
        <h1 className="text-2xl font-bold mb-1">Preços</h1>
        <p className="text-muted-foreground mb-2">
          Gerencie o seu time, adicione novas pessoas, altere cargos. Tudo num só lugar.
        </p>
        <Separator/>
      </BigCard>
    </div>
  );
}