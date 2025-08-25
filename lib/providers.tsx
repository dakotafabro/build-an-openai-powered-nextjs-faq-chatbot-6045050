"use client";

import { Provider } from "react-redux";
import { store } from "./store";

/**
 * Dakota: I like isolating Provider wiring here so layout stays uncluttered.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
