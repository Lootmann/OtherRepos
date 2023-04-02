import React from "react";
import { Queue as QueueClass } from "./def";

export function Queue({ queIndex, ques, focusBox, dequeue }: QueuePropType) {
  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    focusBox(queIndex);
  }

  function deleteQueue() {
    dequeue(queIndex);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="rounded-xl border w-20 h-20"
        onClick={(e) => onClick(e)}
      ></div>
      {ques &&
        ques.map((que: QueueClass) => (
          <div
            key={que.id}
            className="flex rounded-full border w-14 h-14 justify-center items-center text-2xl text-slate-200"
            onClick={deleteQueue}
          >
            {que.num}
          </div>
        ))}
    </div>
  );
}
