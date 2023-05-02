import { transformDataToShifts } from ".";

test("should transform shift within one day", () => {
  const output = transformDataToShifts({
    monday: [
      { type: "open", value: 32400 },
      { type: "close", value: 72000 },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  expect(output).toStrictEqual({
    monday: [[32400, 72000]],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });
});

test("should transform multiple shifts within one day", () => {
  const output = transformDataToShifts({
    monday: [
      { type: "open", value: 32400 },
      { type: "close", value: 72000 },
      { type: "open", value: 73000 },
      { type: "close", value: 74000 },
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  expect(output).toStrictEqual({
    monday: [
      [32400, 72000],
      [73000, 74000],
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });
});

test("should transform spanning shifts within few days", () => {
  const output = transformDataToShifts({
    monday: [{ type: "open", value: 73000 }],
    tuesday: [{ type: "close", value: 2000 }],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  expect(output).toStrictEqual({
    monday: [[73000, 2000]],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });
});

test("should transform spanning shifts on Sunday (edge case)", () => {
  const output = transformDataToShifts({
    monday: [{ type: "close", value: 2000 }],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [{ type: "open", value: 73000 }],
  });

  expect(output).toStrictEqual({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [[73000, 2000]],
  });
});
