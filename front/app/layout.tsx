import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/react-query-provider";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "O que tem de bom?",
  description: "Descubra o que assistir em diferentes streamings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${baloo.variable} dark font-sans`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
