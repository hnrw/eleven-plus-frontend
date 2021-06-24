import React from "react"
import { Typography, Container } from "@material-ui/core"

const WhatsBackstage = ({ textBlack }) => {
  return (
    <Container maxWidth="sm" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Typography
        variant="h4"
        style={{
          marginBottom: 20,
          letterSpacing: 1,
          textAlign: "center",
          color: textBlack,
        }}
      >
        <b>What&apos;s Waterfront?</b>
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ lineHeight: 2, fontSize: 20, color: textBlack }}
      >
        Waterfront is the best tool for parents and children in the UK preparing
        for 11+ exams. Every week your child takes an expertly written maths
        mock test on our website. We analyse their progress and track how they
        rank against the rest of the country.
      </Typography>
    </Container>
  )
}

export default WhatsBackstage
