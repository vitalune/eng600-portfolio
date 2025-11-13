import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Amir Valizadeh - AI Engineer & ML Researcher",
  description: "Professional portfolio of Amir Valizadeh, a Computer Science student at University of Pittsburgh specializing in AI, LLMs, and cutting-edge ML research.",
  keywords: ["AI Engineer", "ML Researcher", "Computer Science", "LLM", "Data Distillation", "Portfolio"],
  authors: [{ name: "Amir Valizadeh" }],
  openGraph: {
    title: "Amir Valizadeh - AI Engineer & ML Researcher",
    description: "Professional portfolio showcasing AI and ML projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
