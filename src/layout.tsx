
'use client';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
       <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-primary tracking-wider">SISONKE</h1>
        <p className="text-sm font-light text-green-300 tracking-widest mt-2">
            MONEY MADE EASY
        </p>
      </div>
      {children}
    </div>
  );
}
