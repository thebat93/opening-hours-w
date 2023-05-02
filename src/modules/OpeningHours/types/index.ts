import { weekdays } from '../const';

type Weekday = typeof weekdays[number];
type EventType = "open" | "close";
type Event = { type: EventType; value: number };
type RawData = Record<Weekday, Event[]>;

type DayShifts = [number, number][];
type Shifts = Record<Weekday, DayShifts>;

export type { Weekday, EventType, Event, RawData, DayShifts, Shifts };
