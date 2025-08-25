"use client";

import { Provider } from "react-redux";
import { store } from "./store";

/**
 * Dakota: I keep Provider wiring in its own file to keep layout tidy.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
