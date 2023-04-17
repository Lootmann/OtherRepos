import { Header } from "./components/Header";
import "./styles/global.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-900 flex flex-col text-xl text-zinc-200">
        <Header />
        <div className="flex-1 bg-zinc-800 p-4">{children}</div>
      </body>
    </html>
  );
}
