import "./styles.css";
import { roiComparisonChart } from "./roiComparison/create_chart";
import { roiHeatmap } from "./roiHeatmap/create_chart";
import { priceSparkline } from "./priceSparkline/create_chart";
import { portfolioHoldings } from "./portfolioHoldings/create_chart";
import { portfolioHoldingsBar } from "./portfolioHoldingsBar/create_chart";

export function roiComparison(x) {
  roiComparisonChart(x);
}
export function priceHeatmap(x) {
  roiHeatmap(x);
}
export function priceHistory(x) {
  priceSparkline(x);
}
export function portfolioAssetsPie(x) {
  portfolioHoldings(x);
}
export function portfolioAssetsBar(x) {
  portfolioHoldingsBar(x);
}
