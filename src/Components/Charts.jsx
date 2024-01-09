import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Charts = () => {
  const chartRef = useRef(null);
  const axisData = [
    "Mon",
    "Tue",
    "Wed",
    "Very Loooong Thu",
    "Fri",
    "Sat",
    "Sun",
  ];
  const data = axisData.map(function (item, i) {
    return Math.round(Math.random() * 1000 * (i + 1));
  });

  const links = data.map(function (item, i) {
    return {
      source: i,
      target: i + 1,
    };
  });
  links.pop();

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Sample configuration, replace this with your own chart options
    const option = {
      title: {
        text: "Graph on Cartesian",
      },
      tooltip: {},
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: axisData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "graph",
          layout: "none",
          coordinateSystem: "cartesian2d",
          symbolSize: 40,
          label: {
            show: true,
          },
          edgeSymbol: ["circle", "arrow"],
          edgeSymbolSize: [4, 10],
          data: data,
          links: links,
          lineStyle: {
            color: "#2f4554",
          },
        },
      ],
    };
    // Set the chart options
    chart.setOption(option);

    // Clean up chart instance when component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default Charts;