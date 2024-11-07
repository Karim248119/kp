import type { Metadata } from "next";
import { JetBrains_Mono, Quicksand, Montserrat } from "next/font/google";
import "./globals.css";
import Theme from "../hooks/ThemeProvider";

export const metadata: Metadata = {
  title: "Karim A. Hassan",
  description: "Portfolio of Karim A. Hassan",
};

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-Quicksand",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Karim A. Hassan</title>
      </head>
      <body
        className={`${quicksand.className} ${JetBrainsMono.variable} ${montserrat.variable} light bg-background text-foreground`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
