import React from "react";

export function WordComponent({ word }: { word: TWord }) {
  return (
    <div className="p-2 flex flex-col gap-4">
      <h1 className="text-4xl">{word.word}</h1>

      {word.meanings?.map((meaning) => (
        <div>
          <h2 className="text-xl text-slate-800">Meaining</h2>

          <ul className="list-disc text-lg">
            {meaning.definitions.map((def) => (
              <li className="ml-8">{def.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
