import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.scss";

const font = FontSans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Example Landing Page",
  description: "Page example",
  keywords: [
    'Landing Page',
    'Frontend',
    'Agency',
    'Agencia'
  ]
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

      <body className={font.className}>
 
        {children}

      </body>
    </html>
  );
}
