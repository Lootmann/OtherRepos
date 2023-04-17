import React from "react";

export function WordComponent({ word }: { word: TWord }) {
  return (
    <div className="p-2 flex flex-col gap-12">
      <h1 className="text-4xl">{word.word}</h1>

      {word.meanings?.map((meaning) => (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-10">
            <span className="text-2xl italic font-semibold">
              {meaning.partOfSpeech}
            </span>
            <span className="w-full border-b border-slate-500"></span>
          </div>

          <div>
            <h2 className="text-xl text-slate-700">Meaning</h2>

            <ul className="list-disc text-lg">
              {meaning.definitions.map((def) => (
                <li className="ml-12">
                  {def.definition}
                  {def.example && (
                    <ul className="mb-5 text-slate-600">
                      <li className="">{def.example}</li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {meaning.synonyms.length > 0 && (
            <div>
              <h2 className="text-xl text-slate-700">Synonyms</h2>

              <ul className="list-disc text-lg">
                {meaning.synonyms.map((sym) => (
                  <li className="ml-12">{sym}</li>
                ))}
              </ul>
            </div>
          )}

          {meaning.antonyms.length > 0 && (
            <div>
              <h2 className="text-xl text-slate-700">Antonyms</h2>

              <ul className="list-disc text-lg">
                {meaning.antonyms.map((ant) => (
                  <li className="ml-12">{ant}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
