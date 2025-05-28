import { Separator } from '@/components/ui/separator';
import BigCard from "../../components/BigCard";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Solutions() {
  const [stockText, setStockText] = useState("");
  const navigate = useNavigate()

  return (
    <div className="h-full">
      <BigCard>
        <h1 className="text-2xl font-bold mb-1">Soluções</h1>
        <p className="text-muted-foreground mb-2">
          Gerencie todo o seu estoque. Vizualize de maneira rápida, tudo o que entra e sai do seu estoque.
          Veja os responsáveis, todas as movimentações e relatórios importantes.
        </p>
        <Separator/>
        <p>{stockText}</p>
        </BigCard>
    </div>
  );
}