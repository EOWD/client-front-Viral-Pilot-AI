import { ToolbarProps } from './Toolbar';
import { InnerRange, RangeType } from './types';
import { DateRange } from '../DateRangePicker/types';
export declare function getDefaultRanges<T extends Date | DateRange>(value: T): InnerRange<T>[];
/**
 * get Toolbar ranges from Toolbar props
 * @param ranges
 * @param calendarDate
 */
export declare const getRanges: <T extends Date | DateRange>({ ranges, calendarDate }: Pick<ToolbarProps<T, T>, "calendarDate" | "ranges">) => InnerRange<T>[];
export declare function splitRanges(ranges?: RangeType<Date>[]): {
    sideRanges: RangeType<Date>[];
    bottomRanges: RangeType<Date>[];
};
