import "./App.css";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-labels";
import * as Gauge from "chartjs-gauge";
import { useEffect } from "react";

const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const value = 68;

const config = {
  type: "gauge",
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Current Appeal Risk",
        data: data,
        value: value,
        minValue: 0,
        backgroundColor: [
          "#2470a0",
          "#3AF4D5",
          "#3AF4D5",
          "#00a03e",
          "#00a03e",
          "#00a03e",
          "#FFE74C",
          "#FFE74C",
          "#dd5f32",
          "#e74700",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        generateLabels: {},
      },
    },
    responsive: true,
    title: {
      display: true,
      text: "Financial Risk",
    },
    layout: {
      padding: {
        bottom: 20,
      },
    },
    needle: {
      radiusPercentage: 3,
      widthPercentage: 3,
      lengthPercentage: 10,
      color: "rgba(0, 0, 0, 1)",
    },
    valueLabel: {
      display: false,
      formatter: function (value, context) {
        return value + "X";
      },
    },
    plugins: {
      datalabels: {
        display: "auto",
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
        color: function (context) {
          return "black";
        },

        font: function (context) {
          const innerRadius = Math.round(context.chart.innerRadius);
          console.log(innerRadius);
          const size = Math.round(innerRadius / 6);

          return {
            weight: "bold",
            size: size,
          };
        },
      },
    },
  },
};

export default function App() {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myGauge = new Chart(ctx, config);
    myGauge.update();
    const val = setTimeout(() => console.log(myGauge.toBase64Image()), 800);
  }, []);

  return (
    <div className="meter">
      <canvas id="myChart"></canvas>
    </div>
  );
}
