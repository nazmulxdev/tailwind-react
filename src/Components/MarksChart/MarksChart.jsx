import React, { use } from "react";
import {
  Area,
  Bar,
  ComposedChart,
  Line,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marksChartData = marksData.map((studentMarks) => {
    const student = {
      id: studentMarks.roll,
      name: studentMarks.name,
      math: studentMarks.marks.math,
      english: studentMarks.marks.english,
      science: studentMarks.marks.science,
    };

    const avg = (student.math + student.english + student.science) / 3;
    student.avg = avg;
    return student;
  });
  console.log(marksChartData);
  return (
    <div>
      <ComposedChart
        width={800}
        height={500}
        data={marksChartData}
        margin={{
          margin: 20,
        }}
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Area dataKey="avg" fill="pink"></Area>
        <Bar dataKey="math" barSize={20} fill="#413ea0"></Bar>
        <Line dataKey="english" fill="#213ea0"></Line>
        <Scatter dataKey="science" fill="#513ea0"></Scatter>
      </ComposedChart>
    </div>
  );
};

export default MarksChart;
