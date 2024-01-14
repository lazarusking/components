"use client";

import { ReactNode } from "react";

export default function MdxLayout({ children }: { children: ReactNode }) {
  // Create any shared layout or styles here
  return <section>{children}</section>;
}
