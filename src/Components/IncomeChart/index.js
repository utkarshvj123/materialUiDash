import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import React from "react";
ReactFusioncharts.fcRoot(FusionCharts, charts, FusionTheme);

const chartConfigs = {
  type: "bar2d",
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Lead sources by industry",
      yaxisname: "Number of Leads",
      aligncaptionwithcanvas: "0",
      plottooltext: "<b>$dataValue</b> leads received",
      theme: "fusion",
    },
    data: [
      {
        label: "Travel & Leisure",
        value: "41",
      },
      {
        label: "Advertising/Marketing/PR",
        value: "39",
      },
      {
        label: "Other",
        value: "38",
      },
      {
        label: "Real Estate",
        value: "32",
      },
      {
        label: "Communications/Cable/Phone",
        value: "26",
      },
      {
        label: "VAR/ISV",
        value: "1",
      },
      {
        label: "Warranty Administrators",
        value: "1",
      },
    ],
  },
};

class IncomeChart extends React.Component {
  render() {
    return <ReactFusioncharts {...chartConfigs} />;
  }
}

export default IncomeChart;
