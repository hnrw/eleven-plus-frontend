import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { ResponsiveRadar } from "@nivo/radar"

import HalfPie from "./graphs/HalfPie"

const Stats = () => {
  const percentile = 90

  const radar = [
    {
      skill: "Arithmatic",
      henry: 50,
      average: 50,
    },
    {
      skill: "Numbers",
      henry: 86,
      average: 50,
    },
    {
      skill: "Shapes",
      henry: 30,
      average: 50,
    },
    {
      skill: "Units",
      henry: 60,
      average: 50,
    },
    {
      skill: "Test",
      henry: 90,
      average: 50,
    },
  ]

  return (
    <>
      <div style={{ height: 500, fontFamily: "Roboto" }}>
        <ResponsiveRadar
          data={radar}
          keys={["henry", "average"]}
          indexBy="skill"
          maxValue={100}
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          curve="linearClosed"
          borderWidth={2}
          borderColor={{ from: "color" }}
          gridLevels={5}
          gridShape="linear"
          gridLabelOffset={36}
          enableDots={true}
          dotSize={10}
          dotColor={{ theme: "background" }}
          dotBorderWidth={2}
          dotBorderColor={{ from: "color" }}
          enableDotLabel={true}
          dotLabel="value"
          dotLabelYOffset={-12}
          colors={{ scheme: "nivo" }}
          fillOpacity={0.25}
          blendMode="multiply"
          animate={true}
          motionConfig="wobbly"
          isInteractive={true}
          legends={[
            {
              anchor: "top-left",
              direction: "column",
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#999",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <HalfPie />
    </>
  )
}

export default Stats
