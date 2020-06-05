import Chart from "chart.js";

export interface ExChartOptions extends Chart.ChartOptions {
  cornerRadius?: number;
}

export interface Props {}
export interface Data {
  bindTo: string;
  chart: Chart | null;
  chartData: Chart.ChartData;
  chartOptions: ExChartOptions;
}
export interface Computed {}
export interface Methods {
  generateChart: () => void;
  customDrawInit: () => void;
  onChangeChartData: () => void;
}
