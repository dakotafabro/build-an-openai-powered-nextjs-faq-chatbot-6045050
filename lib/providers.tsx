"use client";

import { Provider } from "react-redux";
import { store } from "./store";

/**
 * Dakota: Keeping the Provider in its own file keeps the layout tidy.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
