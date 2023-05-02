import { useCallback, useMemo } from "react";
import getISODay from "date-fns/getISODay";

import { Title } from "./components/Title";
import { Rows } from "./components/Rows";
import { TodayTag } from "./components/TodayTag";
import { ClosedTag } from "./components/ClosedTag";
import { ShiftsList } from "./components/ShiftsList";
import { RowValue } from "./components/RowValue";
import { localizeWeekday } from './utils';

import { DayShifts, RawData, Weekday } from "../types";
import { transformDataToShifts } from "../api";

import s from "./index.module.css";

const todayWeekday = getISODay(new Date());

const OpeningHoursCard = ({ data }: { data: RawData }) => {
  const openingHours = transformDataToShifts(data);

  const rows = useMemo(
    () =>
      Object.keys(openingHours).map((weekday, index) => ({
        key: weekday,
        label: localizeWeekday(weekday as Weekday),
        value: openingHours[weekday as Weekday],
        labelTagComponent: todayWeekday - 1 === index && <TodayTag />,
      })),
    [openingHours]
  );

  const renderShifts = useCallback(
    (dayShifts: DayShifts) => (
      <RowValue>
        {dayShifts.length === 0 ? (
          <ClosedTag />
        ) : (
          <ShiftsList shifts={dayShifts} />
        )}
      </RowValue>
    ),
    []
  );

  return (
    <div className={s.card}>
      <Title>Opening hours</Title>
      <Rows<DayShifts> rows={rows} renderValue={renderShifts} />
    </div>
  );
};

export { OpeningHoursCard };
