import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";

// var CanvasJS = CanvasJSReact.CanvasJS;
// CanvasJS.addCultureInfo("zh", {
//   shortMonths: [
//     "一月",
//     "二月",
//     "三月",
//     "四月",
//     "五月",
//     "六月",
//     "七月",
//     "八月",
//     "九月",
//     "十月",
//     "十一月",
//     "十二月",
//   ],
// });
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = ({ data, className = "" }) => {
  const options = {
    animationEnabled: true,
    axisY: {
      includeZero: true,
    },
    zoomEnabled: true,
    zoomType: "xy",
    data: [
      {
        type: "line", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: data.map(([key, value]) => ({
          x: new Date(
            key.slice(0, 4) + "/" + key.slice(4, 6) + "/" + key.slice(6)
          ),
          y: value.cumSum,
        })),
      },
    ],
  };
  return (
    <div className={className}>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  );
};

export default LineChart;
