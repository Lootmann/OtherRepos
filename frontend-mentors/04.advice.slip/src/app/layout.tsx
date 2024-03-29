import "./styles/global.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col bg-slate-800
        justify-center items-center ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
