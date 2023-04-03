import React, { useState } from "react";

const root = {
  children: [
    { name: "1-0", children: [{ name: "1-1" }] },
    {
      name: "2-0",
      children: [{ name: "2-1", children: [{ name: "2-2" }] }],
    },
    { name: "3-0" },
  ],
};

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        <span className="border-2 border-slate-700 hover:border-2 hover:border-slate-900 px-2 rounded-md">
          {entry.children && "+ "}
          {entry.name}
        </span>
      </button>

      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((e, idx) => (
            <Entry key={idx} entry={e} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function App() {
  return (
    <div className="flex flex-col gap-4 min-h-screen bg-slate-700 p-4 text-xl text-slate-200">
      <h1 className="text-2xl">App.tsx</h1>

      <div className="border p-4 text-2xl">
        {root.children.map((entry, idx) => (
          <Entry key={idx} entry={entry} depth={1} />
        ))}
      </div>
    </div>
  );
}
