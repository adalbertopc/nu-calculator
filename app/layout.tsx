import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Rendimientos Anuales NU | Maximiza tus Ahorros",
  description:
    "Calculadora no oficial para estimar tus rendimientos anuales con el Banco NU. Planifica tu futuro financiero de manera independiente y obtén una estimación sin complicaciones de tus ganancias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
