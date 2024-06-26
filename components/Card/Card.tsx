import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <section className="flex flex-col overflow-hidden rounded-xl border-2 border-gray-300">
      {children}
    </section>
  );
}
