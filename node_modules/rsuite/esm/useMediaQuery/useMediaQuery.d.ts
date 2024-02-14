export declare const mediaQuerySizeMap: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
/**
 * React hook that tracks state of a CSS media query.
 * @deprecated Use useMediaQuery instead.
 *
 * @see https://rsuitejs.com/components/use-media-query
 */
export declare function useMediaQueryLegacy(query: string | keyof typeof mediaQuerySizeMap | (string | keyof typeof mediaQuerySizeMap)[]): boolean[];
/**
 * React hook that tracks state of a CSS media query
 * @version 5.48.0
 * @see https://rsuitejs.com/components/use-media-query
 */
export declare function useMediaQuery(query: string | keyof typeof mediaQuerySizeMap | (string | keyof typeof mediaQuerySizeMap)[]): boolean[];
declare const _default: typeof useMediaQuery;
export default _default;
