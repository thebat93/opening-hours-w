import { ReactNode } from "react";

import s from "./RowValue.module.css";

const RowValue = ({ children }: { children: ReactNode }) => (
  <span className={s.value}>{children}</span>
);

export { RowValue };
