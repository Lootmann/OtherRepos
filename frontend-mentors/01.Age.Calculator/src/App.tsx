import { Calculator } from "./Caculator";
import { useState } from "react";

export function App() {
  return (
    <div className="min-h-screen p-6 bg-zinc-900 text-zinc-200 flex flex-col gap-6">
      <h1 className="text-2xl">Age Calculator App</h1>

      <div className="p-6 border">
        <Calculator />
      </div>
    </div>
  );
}
