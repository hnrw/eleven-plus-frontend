import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { ResponsiveRadar } from "@nivo/radar"
import { useDispatch, useSelector } from "react-redux"

import Radar from "./Radar"
import HalfPie from "./HalfPie"
import Percentile from "./Percentile"

const Stats = () => {
  const profile = useSelector((state) => state.profile)
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase()

  if (!profile) return null

  const name = capitalize(profile.firstName)
  return (
    <>
      <Radar />
      <Container maxWidth="md">
        <Typography variant="h4" style={{ textAlign: "center" }}>
          We are currently processing {name}'s results.
        </Typography>
      </Container>
      <Container maxWidth="sm" style={{ marginTop: 20, marginBottom: 20 }}>
        <Typography>
          Waterfront will compare {name}'s results with other students on the
          platform. We still need a bit more time to gather the data and give
          you an accurate result. But we'll let you know when it's ready.
        </Typography>
      </Container>
      <div style={{ opacity: 0.1 }}>
        {/* <Percentile /> */}
        <HalfPie />
        <Container maxWidth="sm" style={{ marginBottom: 40 }}>
          {/* <Typography>
            Only 1 in 10 children who take the 11+ exam get into grammar
            schools. You should aim to be in the blue section - the top 90%
          </Typography> */}
        </Container>
      </div>
    </>
  )
}

export default Stats
