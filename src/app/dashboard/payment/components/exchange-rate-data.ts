export type RateRange = "1D" | "7D" | "30D" | "90D" | "1Y";

export const RATE_RANGES: RateRange[] = ["1D", "7D", "30D", "90D", "1Y"];

export const rateHistory: Record<RateRange, { label: string; rate: number }[]> = {
  "1D": [
    { label: "12am", rate: 0.9192 },
    { label: "4am", rate: 0.9187 },
    { label: "8am", rate: 0.9203 },
    { label: "12pm", rate: 0.9219 },
    { label: "4pm", rate: 0.9211 },
    { label: "8pm", rate: 0.9226 },
    { label: "11:59pm", rate: 0.9234 },
  ],
  "7D": [
    { label: "Aug 27", rate: 0.9145 },
    { label: "Aug 28", rate: 0.9162 },
    { label: "Aug 29", rate: 0.9138 },
    { label: "Aug 30", rate: 0.9174 },
    { label: "Aug 31", rate: 0.9196 },
    { label: "Sep 1", rate: 0.9203 },
    { label: "Sep 2", rate: 0.9234 },
  ],
  "30D": [
    { label: "Aug 4", rate: 0.9021 },
    { label: "Aug 8", rate: 0.9058 },
    { label: "Aug 12", rate: 0.9037 },
    { label: "Aug 16", rate: 0.9092 },
    { label: "Aug 20", rate: 0.9114 },
    { label: "Aug 24", rate: 0.9151 },
    { label: "Aug 28", rate: 0.9162 },
    { label: "Sep 2", rate: 0.9234 },
  ],
  "90D": [
    { label: "Jun 4", rate: 0.8845 },
    { label: "Jun 18", rate: 0.8902 },
    { label: "Jul 2", rate: 0.8877 },
    { label: "Jul 16", rate: 0.8951 },
    { label: "Jul 30", rate: 0.8994 },
    { label: "Aug 13", rate: 0.9078 },
    { label: "Aug 27", rate: 0.9162 },
    { label: "Sep 2", rate: 0.9234 },
  ],
  "1Y": [
    { label: "Sep '25", rate: 0.852 },
    { label: "Oct '25", rate: 0.861 },
    { label: "Nov '25", rate: 0.858 },
    { label: "Dec '25", rate: 0.869 },
    { label: "Jan '26", rate: 0.874 },
    { label: "Feb '26", rate: 0.881 },
    { label: "Mar '26", rate: 0.878 },
    { label: "Apr '26", rate: 0.889 },
    { label: "May '26", rate: 0.897 },
    { label: "Jun '26", rate: 0.888 },
    { label: "Jul '26", rate: 0.899 },
    { label: "Aug '26", rate: 0.916 },
    { label: "Sep '26", rate: 0.9234 },
  ],
};

/** Static conversion rates relative to 1 USD, for the converter widget. */
export const CONVERSION_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.9234,
  GBP: 0.7912,
  JPY: 149.82,
};

export const CURRENCY_CODES = Object.keys(CONVERSION_RATES);
