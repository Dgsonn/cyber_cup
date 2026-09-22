"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function CountdownTimer({ target }: { target: string }) {
  const [time, setTime] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Ngày", value: time?.days },
    { label: "Giờ", value: time?.hours },
    { label: "Phút", value: time?.minutes },
    { label: "Giây", value: time?.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-bg-panel border border-mint/30 shadow-neon"
        >
          <span className="font-display text-xl sm:text-2xl text-gold tabular-nums">
            {u.value !== undefined ? String(u.value).padStart(2, "0") : "--"}
          </span>
          <span className="text-[10px] sm:text-xs uppercase text-white/60 mt-1">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
