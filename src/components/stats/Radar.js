import React, { useEffect, useState } from "react"
import { ResponsiveRadar } from "@nivo/radar"
import gradedCategoryService from "../../services/gradedCategoryService"
import { useDispatch, useSelector } from "react-redux"

// const radar = [
//   {
//     skill: "Arithmetic",
//     Simon: 50,
//     Average: 50,
//   },
//   {
//     skill: "Numbers",
//     Simon: 86,
//     Average: 50,
//   },
//   {
//     skill: "Shapes",
//     Simon: 30,
//     Average: 50,
//   },
//   {
//     skill: "Units",
//     Simon: 60,
//     Average: 50,
//   },
//   {
//     skill: "Algebra",
//     Simon: 90,
//     Average: 50,
//   },
// ]

const Radar = () => {
  const user = useSelector((state) => state.user)
  const profile = useSelector((state) => state.profile)
  const [gcs, setGcs] = useState(null)
  const [averageGcs, setAverageGcs] = useState(null)

  useEffect(() => {
    if (user) {
      gradedCategoryService
        .getGradedCategories(user.token)
        .then((gc) => setGcs(gc))

      gradedCategoryService.getAverageGcs().then((av) => setAverageGcs(av))
    }
  }, [user])

  if (!gcs || !averageGcs || !profile) return null

  const calculatePercent = (gc) => Math.round((100 * gc.correct) / gc.attempts)

  const withAverage = gcs.map((gc) => {
    const matchedAverage = averageGcs.filter(
      (agc) => agc.name === gc.categoryName
    )
    const average = matchedAverage[0].average
    const roundedAverage = Math.round(average)
    return {
      ...gc,
      average: roundedAverage,
    }
  })

  const data = withAverage.map((gc) => ({
    category: gc.categoryName,
    [profile.firstName]: calculatePercent(gc),
    Average: gc.average,
  }))

  return (
    <>
      <div style={{ height: 500, fontFamily: "Roboto" }}>
        <ResponsiveRadar
          data={data}
          keys={["Average", profile.firstName]}
          indexBy="category"
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
          tooltipFormat={(value, key) => `${value}%`}
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
