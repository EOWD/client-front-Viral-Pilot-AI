import { DateRange } from './types';
export declare function getSafeCalendarDate({ value, calendarKey, allowAameMonth }: {
    value: [] | [Date] | [Date, Date] | null;
    calendarKey?: 'start' | 'end';
    allowAameMonth?: boolean;
}): DateRange;
export declare const isSameRange: (source: DateRange | null, dest: DateRange | null, format: string) => boolean;
export declare const getMonthHoverRange: (date: Date) => DateRange;
export declare const getWeekHoverRange: (isoWeek: boolean, date: Date) => DateRange;
