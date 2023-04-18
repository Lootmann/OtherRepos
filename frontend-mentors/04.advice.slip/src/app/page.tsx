"use client";

import React, { useEffect, useState } from "react";

async function getAdvice() {
  const res = await fetch("http://localhost:3000/api/advice");
  const data = await res.json();
  return data.data as TAdvice;
}

export default function Home() {
  const [advice, setAdvice] = useState<TAdvice>();

  useEffect(() => {
    const fetch = async () => {
      const advice = await getAdvice();
      setAdvice(advice);
    };
    fetch();
  }, []);

  async function onClick(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    e.preventDefault();
    const advice = await getAdvice();

    setAdvice(advice);
  }

  return (
    <>
      {advice && (
        <main className="flex flex-col gap-6 items-center w-1/2 p-6 bg-slate-700 rounded-xl">
          <h1 className="text-xl text-green-400 uppercase font-bold">
            ADVICE #{advice.slip.id}
          </h1>

          <p className="text-slate-200 text-3xl text-center font-semibold">
            {advice.slip.advice}
          </p>

          <div className="flex gap-3 items-center w-full text-slate-300 font-bold text-3xl">
            <hr className="w-1/2 inline border-slate-500 border-2" />
            <span
              className="font-bold text-slate-400 hover:text-slate-200
              cursor-pointer transition-all duration-200"
              onClick={(e) => onClick(e)}
            >
              ||
            </span>
            <hr className="w-1/2 inline border-slate-500 border-2" />
          </div>
        </main>
      )}
    </>
  );
}
