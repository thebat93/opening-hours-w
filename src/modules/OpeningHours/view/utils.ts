const localizedWeekdays = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
} as const;

const localizeWeekday = (weekday: keyof typeof localizedWeekdays) => localizedWeekdays[weekday];

export { localizeWeekday }
