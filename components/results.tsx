import ResultCard from "./result-card";

interface ResultsProps {
  finalAmount: string;
  earnings: string;
  dailyEarnings: string;
  monthlyEarnings?: string;
}

export default function Results({
  finalAmount,
  earnings,
  dailyEarnings,
  monthlyEarnings,
}: ResultsProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-8">Resultados</h3>
      <div className="grid gap-4">
        <ResultCard title="Cajita Final" result={finalAmount} />
        <ResultCard title="Ganancias Totales" result={earnings} />
        <ResultCard
          title="Rendimiento Diario Aproximado"
          result={dailyEarnings}
        />
        {monthlyEarnings && (
          <ResultCard
            title="Rendimiento Mensual Aproximado"
            result={monthlyEarnings}
          />
        )}
      </div>
    </div>
  );
}
