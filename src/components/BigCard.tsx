import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface BigCardProps {
  children: ReactNode;
}

export default function BigCard({ children }: BigCardProps) {
  return (
    <Card className="w-full h-full max-w-7xl mx-auto p-6 bg-background shadow-xl rounded-2xl">
      <CardContent className="h-full">{children}</CardContent>
    </Card>
  );
}
