import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ResultCardProps {
  title: string;
  result: string;
}

export default function ResultCard({ title, result }: ResultCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-4xl font-bold min-h-10 max-w-80 w-5/6 break-words">
        {result}
      </CardContent>
    </Card>
  );
}
