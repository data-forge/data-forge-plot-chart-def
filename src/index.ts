
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
    Default =  "default",
    Indexed = "indexed",
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
 * Configures an axis of the chart.
 */
export interface IAxisConfig {

    /**
     * Sets the type of the axis' data.
     * Default: AxisType.Indexed ("indexed")
     */
    axisType?: AxisType;

    /**
     * Label for the axis.
     */
    label?: IAxisLabelConfig;
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
    x?: IAxisConfig;

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
