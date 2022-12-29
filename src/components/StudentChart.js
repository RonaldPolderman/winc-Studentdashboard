import React from "react";
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
} from "victory";
import ChartFilter from "./ChartFilter";
import StudentProfile from "./StudentProfile";

function StudentChart(props) {
  const {
    studentData,
    isBarchart,
    isJoy,
    isDifficulty,
    handleChartType,
    studentProfile,
  } = props;

  let strokeColor1;
  let strokeColor2;
  let fillColor1;
  let fillColor2;

  isJoy
    ? (strokeColor1 = { data: { stroke: "#0000ff" } }) &&
      (fillColor1 = { data: { fill: "#0000ff" } })
    : (strokeColor1 = { data: { display: "none" } }) &&
      (fillColor1 = { data: { display: "none" } });
  isDifficulty
    ? (strokeColor2 = { data: { stroke: "#ff0000" } }) &&
      (fillColor2 = { data: { fill: "#ff0000" } })
    : (strokeColor2 = { data: { display: "none" } }) &&
      (fillColor2 = { data: { display: "none" } });

  return (
    <div className="studentchart">
      {isBarchart ? (
        <VictoryChart
          domainPadding={{ x: 20 }}
          width={650}
          height={200}
          padding={{ top: 25, bottom: 60, left: 55, right: 10 }}
        >
          <VictoryAxis
            className="test"
            textAnchor="start"
            label="assignment"
            style={{
              axisLabel: { padding: 30, fill: "#cd296a", fontSize: 24 },
              axis: { stroke: "white" },
              Label: { fontsize: 6 },
              tickLabels: {
                angle: 90,
                fontSize: 6,
                padding: 15,
                fill: "gray",
              },
            }}
            tickValues={[0, 1, 2, 3, 4, 5]}
          />
          <VictoryAxis
            label="score"
            style={{
              axisLabel: { padding: 25, fill: "#cd296a", fontSize: 24 },
              axis: { stroke: "white" },
              tickLabels: {
                fontSize: 6,
                fill: "gray",
              },
              ticks: { stroke: "#272727", size: 6 },
            }}
            dependentAxis
            tickFormat={(x) => `${x}`}
          />
          <VictoryGroup offset={2}>
            <VictoryBar
              data={studentData}
              barWidth={3}
              x={"assignment"}
              y={"difficulty"}
              style={fillColor1}
              animate={{
                duration: 1500,
                onLoad: { duration: 500 },
              }}
            />
            <VictoryBar
              data={studentData}
              x={"assignment"}
              y={"joy"}
              alignment="start"
              style={fillColor2}
              animate={{
                duration: 1500,
                onLoad: { duration: 500 },
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      ) : (
        <VictoryChart
          domainPadding={{ x: 20 }}
          width={650}
          height={200}
          padding={{ top: 25, bottom: 60, left: 55, right: 10 }}
        >
          <VictoryAxis
            textAnchor="start"
            label="assignment"
            style={{
              axisLabel: { padding: 30, fill: "#cd296a", fontSize: 24 },
              axis: { stroke: "white" },
              Label: { fontsize: 6 },
              tickLabels: {
                angle: 90,
                fontSize: 6,
                padding: 15,
                fill: "gray",
              },
            }}
            tickValues={[0, 1, 2, 3, 4, 5]}
          />
          <VictoryAxis
            label="score"
            style={{
              axisLabel: { padding: 25, fill: "#cd296a", fontSize: 24 },
              axis: { stroke: "white" },
              tickLabels: {
                fontSize: 6,
                fill: "gray",
              },
              ticks: { stroke: "#272727", size: 5 },
            }}
            dependentAxis
            tickFormat={(x) => `${x}`}
          />
          <VictoryGroup offset={2}>
            <VictoryLine
              data={studentData}
              barWidth={0.1}
              x={"assignment"}
              y={"difficulty"}
              style={strokeColor1}
              animate={{
                duration: 2500,
                onLoad: { duration: 2500 },
              }}
            />
            <VictoryLine
              data={studentData}
              x={"assignment"}
              y={"joy"}
              alignment="start"
              style={strokeColor2}
              animate={{
                duration: 3000,
                onLoad: { duration: 3000 },
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      )}
      <ChartFilter
        handleChartType={handleChartType}
        isBarchart={isBarchart}
        isDifficulty={isDifficulty}
        isJoy={isJoy}
      />
      <StudentProfile studentProfile={studentProfile} />
    </div>
  );
}

export default StudentChart;
