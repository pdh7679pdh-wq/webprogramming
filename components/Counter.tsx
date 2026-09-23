"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-8 py-6 shadow-sm flex flex-col items-center gap-4">
      <p className="text-gray-800">
        현재 카운트: <span className="font-bold">{count}</span>
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
        >
          -1 감소
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          +1 증가
        </button>
      </div>
    </div>
  );
}