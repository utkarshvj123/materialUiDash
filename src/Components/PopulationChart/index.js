import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFusioncharts.fcRoot(FusionCharts, charts, FusionTheme);

// Resolves charts dependancy

const chartConfigs = {
  type: "mscolumn2d",
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "App Publishing Trend",
      subcaption: "2012-2016",
      xaxisname: "Years",
      yaxisname: "Total number of apps in store",
      formatnumberscale: "1",
      plottooltext:
        "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
      theme: "fusion",
      drawcrossline: "1",
    },
    categories: [
      {
        category: [
          {
            label: "2012",
          },
          {
            label: "2013",
          },
          {
            label: "2014",
          },
          {
            label: "2015",
          },
          {
            label: "2016",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "iOS App Store",
        data: [
          {
            value: "125000",
          },
          {
            value: "300000",
          },
          {
            value: "480000",
          },
          {
            value: "800000",
          },
          {
            value: "1100000",
          },
        ],
      },
      {
        seriesname: "Google Play Store",
        data: [
          {
            value: "70000",
          },
          {
            value: "150000",
          },
          {
            value: "350000",
          },
          {
            value: "600000",
          },
          {
            value: "1400000",
          },
        ],
      },
      {
        seriesname: "Google Play Store4",
        data: [
          {
            value: "70000",
          },
          {
            value: "150000",
          },
          {
            value: "350000",
          },
          {
            value: "600000",
          },
          {
            value: "1400000",
          },
        ],
      },
      {
        seriesname: "Google Play Store3",
        data: [
          {
            value: "70000",
          },
          {
            value: "150000",
          },
          {
            value: "350000",
          },
          {
            value: "600000",
          },
          {
            value: "1400000",
          },
        ],
      },
      {
        seriesname: "Google Play Store2",
        data: [
          {
            value: "70000",
          },
          {
            value: "150000",
          },
          {
            value: "350000",
          },
          {
            value: "600000",
          },
          {
            value: "1400000",
          },
        ],
      },

      {
        seriesname: "Amazon AppStore",
        data: [
          {
            value: "10000",
          },
          {
            value: "100000",
          },
          {
            value: "300000",
          },
          {
            value: "600000",
          },
          {
            value: "900000",
          },
        ],
      },
    ],
  },
};
class PopulationChart extends React.Component {
  render() {
    return <ReactFusioncharts {...chartConfigs} />;
  }
}
export default PopulationChart;
