import format from "date-fns/format";
import add from "date-fns/add";
import startOfDay from "date-fns/startOfDay";

import { DayShifts } from "../../types";

const listFormatter = new Intl.ListFormat("en", {
  style: "narrow",
  type: "conjunction",
});

const transformTupleToRange = (tuple: [any, any]) => tuple.join(" - ");

const transformToHumanDate = (seconds: number) => {
  const date = add(startOfDay(new Date()), { seconds });

  if (date.getMinutes() === 0) {
    return format(date, "h a");
  }

  return format(date, "h:mm a");
};

const ShiftsList = ({ shifts }: { shifts: DayShifts }) => (
  <>
    {listFormatter.format(
      shifts.map(([openingTime, closingTime]) =>
        transformTupleToRange([
          transformToHumanDate(openingTime),
          transformToHumanDate(closingTime),
        ])
      )
    )}
  </>
);

export { ShiftsList };
