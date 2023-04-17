"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
    console.log(searchWord);

    // TODO: fetch def of word
    // TODO: add query string
    const res = await fetch(
      `http://localhost:3000/api/dict?word=${searchWord}`
    );
    // TODO: validation
    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="flex flex-col gap-4">
      {/* TODO: submit, fetch dict api */}
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

      <div className="p-2">
        <h1 className="">Hello World</h1>
      </div>
    </main>
  );
}
