import React, { useEffect, useState } from "react";
import { Queue as QueueClass } from "./def";
import { Queue } from "./Queue";
import { v4 as uuid4 } from "uuid";

function randomNumber(): number {
  return Math.floor(Math.random() * 200);
}

export function App() {
  const [ques, setQue] = useState<QueueClass[][]>([[], [], [], [], []]);
  const [queIndex, setQueIndex] = useState<number>(0);
  const [checkNumber, setCheckoutNumber] = useState<number>(0);

  useEffect(() => {
    console.log("* App.tsx");
  }, []);

  function onClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("* checkout");
    console.log(checkNumber);

    setQue((prevQue) => {
      console.log("* setQue, enqueue");
      const newQueue = [...prevQue];
      const qued = new QueueClass(uuid4(), checkNumber);
      if (newQueue[queIndex].at(-1)?.num != checkNumber) {
        newQueue[queIndex].push(qued);
      }
      return newQueue;
    });

    setCheckoutNumber(randomNumber());
  }

  function focusBox(queIndex: number) {
    console.log("* focusBox ", queIndex);
    setQueIndex(queIndex);
  }

  function Dequeue(queIndex: number) {
    console.log("* Dequeue", queIndex);

    setQue((prevQue) => {
      const newQueue = [...prevQue];
      newQueue[queIndex].pop();
      return newQueue;
    });
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCheckoutNumber(Number(e.target.value));
  }

  return (
    <main className="min-h-screen bg-slate-900 p-4 flex flex-col gap-5">
      <header className="border border-slate-400 p-4 text-2xl">
        <form
          method="post"
          className="flex gap-10 justify-center"
          onSubmit={(e) => onClick(e)}
        >
          <input
            type="number"
            name="num"
            id="num"
            className="px-4 rounded-md"
            value={checkNumber}
            onChange={(e) => onChange(e)}
          />
          <input
            type="submit"
            value="checkout"
            className="px-4 bg-zinc-600 rounded-md"
          />
        </form>
      </header>

      <section className="flex justify-center gap-10">
        {ques.length && (
          <>
            {ques.map((que, index) => {
              return (
                <Queue
                  key={index}
                  queIndex={index}
                  ques={que}
                  focusBox={focusBox}
                  dequeue={Dequeue}
                />
              );
            })}
          </>
        )}
      </section>
    </main>
  );
}
