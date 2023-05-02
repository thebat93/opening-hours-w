import { ReactNode } from "react";
import clsx from "clsx";

import s from "./Title.module.css";

const Clock = () => (
  <div className={s.clock}>
    <div className={clsx(s.hand, s.minute)}></div>
    <div className={clsx(s.hand, s.hour)}></div>
  </div>
);

const Title = ({ children }: { children: ReactNode }) => (
  <div>
    <div className={s.wrapper}>
      <Clock />
      <div className={s.title}>{children}</div>
    </div>
    <hr className={s.separator} />
  </div>
);

export { Title };
