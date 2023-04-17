import React from "react";

export function Child() {
  return (
    <div className="flex flex-col gap-4 bg-zinc-600 p-2 rounded-md">
      <h2 className="text-2xl text-zinc-950">Child</h2>

      <div>
        <p>Hello World</p>
        <p>Hello World</p>
      </div>
    </div>
  );
}
