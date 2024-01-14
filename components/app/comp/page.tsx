import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return <div className={`mx-auto max-w-screen-xl px-4 `}>{children}</div>;
}
