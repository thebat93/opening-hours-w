import { Fragment, ReactNode } from "react";

import s from "./Rows.module.css";

type DataRow<V> = {
  key: string;
  label: string;
  value: V;
  labelTagComponent?: ReactNode;
};

const Rows = <V, >({
  rows = [],
  renderValue,
}: {
  rows: DataRow<V>[];
  renderValue: (value: V, key: string) => ReactNode;
}) => (
  <div className={s.wrapper}>
    {rows.map((row) => (
      <Fragment key={row.key}>
        <div className={s.row}>
          <div className={s.labelWrapper}>
            <span>{row.label}</span>
            {!!row.labelTagComponent && <span>{row.labelTagComponent}</span>}
          </div>
          <div className={s.value}>{renderValue(row.value, row.key)}</div>
        </div>
        <hr className={s.separator} />
      </Fragment>
    ))}
  </div>
);

export { Rows };
