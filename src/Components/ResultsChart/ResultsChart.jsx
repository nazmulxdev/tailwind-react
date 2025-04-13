import React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle
} from "recharts";

const resultData = [
  {
    roll: 1,
    name: "Ayaan",
    math: 85,
    english: 78,
    science: 92,
  },
  {
    roll: 2,
    name: "Sara",
    math: 90,
    english: 88,
    science: 95,
  },
  {
    roll: 3,
    name: "Kabir",
    math: 72,
    english: 65,
    science: 70,
  },
  {
    roll: 4,
    name: "Meera",
    math: 88,
    english: 91,
    science: 85,
  },
  {
    roll: 5,
    name: "Zayan",
    math: 60,
    english: 58,
    science: 64,
  },
  {
    roll: 6,
    name: "Riya",
    math: 95,
    english: 94,
    science: 96,
  },
  {
    roll: 7,
    name: "Dev",
    math: 76,
    english: 82,
    science: 79,
  },
  {
    roll: 8,
    name: "Ishita",
    math: 89,
    english: 87,
    science: 90,
  },
  {
    roll: 9,
    name: "Arjun",
    math: 68,
    english: 72,
    science: 70,
  },
  {
    roll: 10,
    name: "Nia",
    math: 81,
    english: 85,
    science: 83,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <BarChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar
          dataKey="math"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </div>
  );
};

export default ResultsChart;
