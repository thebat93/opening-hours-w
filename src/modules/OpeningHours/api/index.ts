import { Shifts, Weekday } from "../types";
import { weekdays } from "../const";
import { RawData } from "../types";

const transformDataToShifts = (data: RawData): Shifts => {
  const shifts = {} as Shifts;

  let currentDay: Weekday | null = null;

  let openingTime: number | null = null;
  let closingTime: number | null = null;

  // Edge case: Closing time for Sunday
  let closingTimeLeftover: number | null = null;

  for (const weekday of weekdays) {
    shifts[weekday] = [];

    const dayEvents = data[weekday];

    for (const dayEvent of dayEvents) {
      if (dayEvent.type === "open") {
        currentDay = weekday;
        openingTime = dayEvent.value;
      }

      if (dayEvent.type === "close") {
        closingTime = dayEvent.value;

        if (openingTime && currentDay) {
          shifts[currentDay].push([openingTime, closingTime]);
        } else {
          closingTimeLeftover = closingTime;
        }
      }
    }

    // Handle edge case
    if (closingTimeLeftover && currentDay && openingTime) {
      shifts[currentDay].push([openingTime, closingTimeLeftover]);
    }
  }

  return shifts;
};

export { transformDataToShifts }
