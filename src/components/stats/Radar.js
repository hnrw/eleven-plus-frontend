import React, { useEffect, useState } from "react"
import { ResponsiveRadar } from "@nivo/radar"

const Radar = () => {
  const radar = [
    {
      skill: "Arithmetic",
      Simon: 50,
      Average: 50,
    },
    {
      skill: "Numbers",
      Simon: 86,
      Average: 50,
    },
    {
      skill: "Shapes",
      Simon: 30,
      Average: 50,
    },
    {
      skill: "Units",
      Simon: 60,
      Average: 50,
    },
    {
      skill: "Algebra",
      Simon: 90,
      Average: 50,
    },
  ]
  return (
    <>
      <div style={{ height: 500, fontFamily: "Roboto" }}>
        <ResponsiveRadar
          data={radar}
          keys={["Simon", "Average"]}
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
    </>
  )
}

export default Radar
