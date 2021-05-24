import React from "react";
import blue from "@material-ui/core/colors/indigo";
import CanvasJSReact from "../assets/canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
CanvasJS.addColorSet(
  "materialUI",
  [
    blue[900],
    blue[800],
    blue[600],
    blue[500],
    blue[300],
    blue[200],
    blue[100],
  ].reverse()
);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = ({ data, title, className }) => {
  data = data.slice(data.length - 7, data.length);

  const options = {
    animationEnabled: true,
    title: {
      text: title,
    },
    axisY: {
      includeZero: true,
    },
    axisX: {
      valueFormatString: "MM/DD",
    },
    colorSet: "materialUI",
    toolTip: {
      contentFormatter: function (e) {
        return `確診數: ${e.entries[0].dataPoint.y}`;
      },
    },
    culture: "zh",
    data: [
      {
        type: "column", //change type to bar, line, area, pie, etc
        indexLabel: "{y}", //Shows y value on all Data Points
        reversed: true,
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: data.map(([key, value]) => ({
          x: new Date(key),
          y: value.count,
        })),
      },
    ],
  };
  return (
    <div className={className}>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default BarChart;
