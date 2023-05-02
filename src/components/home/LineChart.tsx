"use client";
import useDemoConfig from "@/hooks/useDemoConfig";

import { Chart } from "react-charts";

export const LineChart = () => {
  return (
    <section>
      <Line />
      {/* <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        /> */}
      {/* <Chart
        options={{
          data: [
            {
              label: "Series 1",
              data: [
                [0, 1],
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 7],
              ],
            },
            {
              label: "Series 2",
              data: [
                [0, 3],
                [1, 1],
                [2, 5],
                [3, 6],
                [4, 4],
              ],
            },
          ],
        }}
      /> */}
    </section>
  );
};

import React from "react";
import { AxisOptions } from "react-charts";

function Line() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />

      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </>
  );
}
