import { Separator } from '@/components/ui/separator';
import BigCard from "../../components/BigCard";
import { useEffect, useState } from 'react';

export default function Home() {
  const [stockText, setStockText] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/stock", {
      credentials: "include", // se estiver usando cookies
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar dados");
        return res.json();
      })
      .then((data) => setStockText(data.message))
      .catch((err) => {
        console.error("Erro ao buscar o texto:", err);
        setStockText("Erro ao carregar informações.");
      });
  }, []);

  return (
    <div className="h-full">
      <BigCard>
        <h1 className="text-2xl font-bold mb-1">Estoque</h1>
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