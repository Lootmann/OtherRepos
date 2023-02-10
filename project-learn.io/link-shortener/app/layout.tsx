import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-slate-700 p-4 text-slate-200">{children}</body>
    </html>
  );
}
