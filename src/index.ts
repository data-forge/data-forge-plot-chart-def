
import { ISerializedDataFrame } from "@data-forge/serialization";

/**
 * Defines the type of chart to output.
 */
export enum ChartType {
    Line = "line",
    Bar = "bar",
    Scatter = "scatter",
    Area = "area",
    Histograph = "histogram",
    Pie = "pie",
    Donut = "donut",
    RadialBar = "radialBar",
    Bubble = "bubble",
    Heatmap = "heatmap",
    Candlestick = "candlestick",
    Radar = "radar",
}

/**
 * Defines the type of an axis.
 */
export enum AxisType {
    Numerical = "numerical",
    Timeseries = "timeseries",
    Category = "category",
}

/**
 * Defines the position of a horizontal label.
 */
export enum HorizontalLabelPosition {
    InnerRight = "inner-right", // Default
    InnerCenter = "inner-center",
    InnerLeft = "inner-left",
    OuterRight = "outer-right",
    OuterCenter = "outer-center",
    OuterLeft = "outer-left",
}

/**
 * Defines the position of a vertical label.
 */
export enum VerticalLabelPosition {
    InnerTop = "inner-top", // Default
    InnerMiddle = "inner-middle",
    InnerBottom = "inner-bottom",
    OuterTop = "outer-top",
    OuterMiddle = "outer-middle",
    OuterBottom = "outer-bottom",
}

/**
 * Configures the font for a label.
 */
export interface IFontConfig {
    /**
     * Font size for the series label.
     */
    size?: string;

    /**
     * Font family for the series label.
     */
    family?: string;
}

/**
 * Configures the label for a series.
 */
export interface ISeriesLabelConfig {

    /**
     * The text for the label.
     */
    text?: string;

    /**
     * Configures the font for the label.
     */
    font?: IFontConfig;
}

/**
 * Configure labels that are applied to each data point.
 */
export interface IDataLabels {
    /**
     * Configure the font for data labels.
     */
    font?: IFontConfig;
}

/**
 * Relates a single axis to data series.
 */
export interface IAxisSeriesConfig {

    /**
     * The name of the series to render on the axis.
     */
    series: string;

    /**
     * The label for the series on this axis.
     */
    label?: string;

    /**
     * The format for rendering values of the series.
     */
    format?: string;

    /**
     * The color to render to assign to the series.
     */
    color?: string;
}

/**
 * Relates a single Y axis to data series.
 */
export interface IYAxisSeriesConfig extends IAxisSeriesConfig {

    /**
     * Configure a separate X axis for the y axis.
     */
    x?: IAxisSeriesConfig;
}

/**
 * Defines the configuration of an axis label.
 */
export interface IAxisLabelConfig {

    /**
     * The text for the label.
     */
    text?: string;

    /**
     * Position of the label.
     */
    position?: HorizontalLabelPosition | VerticalLabelPosition;

    /**
     * Configures the font for the label.
     */
    font?: IFontConfig;
}

/**
 * Configuration for axis tick marks.
 */
export interface IAxisTicksConfiguration {
    /**
     * Configures the font for tick marks..
     */
    font?: IFontConfig;
}

/**
 * Configures an axis of the chart.
 */
export interface IAxisConfig {

    /**
     * Title for the axis.
     */
    label?: IAxisLabelConfig;

    /**
     * Configuration for axis tick marks.
     */
    ticks?: IAxisTicksConfiguration;

    /**
     * The format for rendering values on the axis.
     */
    format?: string; //TODO: This doesn't exist in the DFP version of the chart def.
}

/**
 * Configures the X axis of the chart.
 */
export interface IXAxisConfig extends IAxisConfig {

    /**
     * Sets the type of the axis' data.
     */
    axisType?: AxisType;
}

/**
 * Configures a Y axis of the chart.
 */
export interface IYAxisConfig extends IAxisConfig {

    /**
     * The minimum value to render on the axis.
     */
    min?: number;

    /**
     * The maximum value to render on the axis.
     */
    max?: number;
}

/**
 * Configures the legend of the chart.
 */
export interface ILegendConfig {

    /**
     * Set to true (default) to show the legend for the chart   .
     */
    show: boolean;

    /**
     * Configure the font in the legend.
     */
    font?: IFontConfig;
}

/**
 * Defines the chart.
 */
export interface IPlotConfig {

    /**
     * The type of chart to render.
     */
    chartType?: ChartType;

    /**
     * Width of the plot.
     * eg 100px, 100%, 100, etc
     */
    width?: number | string;

    /**
     * Height of the plot.
     * eg 100px, 100%, 100, etc
     */
    height?: number | string;

    /**
     * Configuration for the x axis.
     */
    x?: IXAxisConfig;

    /**
     * Configuration for the y axis.
     */
    y?: IYAxisConfig;

    /**
     * Configuration for the second y axis.
     */
    y2?: IYAxisConfig;

    /**
     * Configure the chart's legend.
     */
    legend?: ILegendConfig;

    /**
     * Configure data labels for the whole chart.
     */
    dataLabels?: IDataLabels;
}

/**
 * Maps the columns in a dataframe to axis in the chart.
 */
export interface IAxisMap {

    /**
     * The default x axis for the chart.
     */
    x?: IAxisSeriesConfig;

    /**
     * The y axis for the chart.
     */
    y: IYAxisSeriesConfig[];

    /**
     * The optional  second y axis for the chart.
     */
    y2: IYAxisSeriesConfig[];
}

/**
 * A chart definition that is suitable for serialization to JSON and transfer to the browser via REST API.
 * Can be used to instantiate a Data-Forge chart in the browser.
 */
export interface IChartDef {

    /**
     * JSON serializable representation of the data.
     */
    data: ISerializedDataFrame;

    /**
     * Defines the look of the chart.
     */
    plotConfig: IPlotConfig;

    /**
     * Maps fields in the data to axis' on the chart.
     */
    axisMap: IAxisMap;
}
