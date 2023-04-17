"use client";

import { Suspense } from "react";
import { Child } from "./components/Child";
import { Loading } from "./components/Loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Child />
      </Suspense>
    </main>
  );
}
