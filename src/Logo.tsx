
'use client';

import Image from "next/image";

export function Logo() {
  return (
    <div className="flex flex-col items-center gap-2 text-lg font-bold text-primary">
        <Image 
            src="https://picsum.photos/seed/dollar-logo/80/80" 
            alt="Sisonke Logo"
            width={80}
            height={80}
            className="h-20 w-20 rounded-full"
            data-ai-hint="dollar sign"
        />
      <div className="flex items-center text-4xl font-bold text-primary tracking-wider">
        <span>SISO</span>
        <span className="relative">
          N
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-3 left-1/2 -translate-x-1/2"
          >
            <path
              d="M12 15C18.0751 15 23 10.3137 23 4.5V1H1V4.5C1 10.3137 5.92487 15 12 15Z"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />
            <path d="M5 5V8" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
            <path d="M19 5V8" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span>KE</span>
      </div>
      <p className="text-sm font-light text-green-300 tracking-widest">
        MONEY MADE EASY
      </p>
    </div>
  );
}
