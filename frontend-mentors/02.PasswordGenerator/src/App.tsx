import { useState } from "react";

export function App() {
  const [charLength, setCharLength] = useState<number>(1);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { value } = e.target;
    setCharLength(Number(value));
  }

  return (
    <div className="flex flex-col gap-10 items-center min-h-screen bg-zinc-900 text-zinc-200 text-2xl pt-10">
      <div className="w-1/2 flex flex-col gap-10">
        <h2 className="text-zinc-500 text-center">Password Generator</h2>
        <p className="bg-zinc-800 p-4">Input Password</p>

        <form method="post" className="flex flex-col gap-2 bg-zinc-800 p-4">
          <div className="flex flex-col">
            <label htmlFor="char-length" className="flex justify-around pb-2">
              <span>Character Length</span>
              <span>{charLength}</span>
            </label>

            <input
              type="range"
              name="char-length"
              id="char-length"
              min={1}
              max={20}
              value={charLength}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="p-2">
            <span>Include Uppercase Letters</span>
          </div>

          <div className="p-2">
            <span>Include Lowercase Letters</span>
          </div>

          <div className="p-2">
            <span>Include Numbers</span>
          </div>

          <div className="p-2">
            <span>Include Symbols</span>
          </div>

          <div className="flex justify-between bg-zinc-900 p-2 mb-4">
            <span className="text-zinc-600">STRENGTH</span>
            <span>MEDIUM [] []</span>
          </div>

          <div className="p-2 border-green-500 border-2 text-center">
            <span className="text-green-500">GENERATE ➡️</span>
          </div>
        </form>
      </div>
    </div>
  );
}
