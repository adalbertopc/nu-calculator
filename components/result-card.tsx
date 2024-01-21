interface ResultCardProps {
  title: string;
  result: string;
}

export default function ResultCard({ title, result }: ResultCardProps) {
  return (
    <article className="bg-slate-100 rounded-lg p-4 grid gap-2">
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="text-4xl font-bold min-h-10">{result}</p>
    </article>
  );
}
