"use client";

import { FormEvent, useState } from "react";
import { WordComponent } from "./Word";

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>("");
  const [word, setWord] = useState<TWord | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:3000/api/dict?word=${searchWord}`
    );
    // TODO: validation
    const data = await res.json();

    // TODO: use State def
    setWord(data["meanings"]);
  }

  return (
    <main className="flex flex-col gap-4">
      <form
        method="post"
        className="flex gap-4 bg-slate-900 rounded-md pl-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          name="search"
          id="search"
          className="flex-1 bg-slate-900 text-slate-200 outline-none"
          placeholder="word"
          autoFocus
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <input
          type="submit"
          value="search"
          className="bg-slate-700 text-slate-200 px-2 rounded-r-md"
        />
      </form>

      <hr className="border-slate-600" />

      {word && <WordComponent word={word} />}
    </main>
  );
}
