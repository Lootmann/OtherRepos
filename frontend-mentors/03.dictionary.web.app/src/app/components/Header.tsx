import React from "react";

export function Header() {
  return (
    <div className="flex flex-col gap-4 p-2">
      <header className="flex justify-between gap-4">
        <p>book</p>

        <span className="mx-auto"></span>

        <p>font</p>
        <p>dark mode</p>
      </header>
    </div>
  );
}
