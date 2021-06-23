import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { Container } from "@material-ui/core"

import LandingHeader from "./landingPageComponents/LandingHeader"
import WhatsBackstage from "./landingPageComponents/WhatsBackstage"
import HowItWorks from "./landingPageComponents/HowItWorks"
import LandingMain from "./landingPageComponents/LandingMain"
import LandingFooter from "./landingPageComponents/LandingFooter"

import Percentile from "./stats/Percentile"
import HalfPie from "./stats/HalfPie"
import LandingRadar from "./landingPageComponents/LandingRadar"
import LandingLineProgress from "./landingPageComponents/LandingLineProgress"

const LandingPage = () => {
  const user = useSelector((state) => state.user)
  document.title = "Waterfront 11+ Exam Preparation"

  const textBlack = "#121D1E"
  const landingPage = () => (
    <>
      <LandingHeader textBlack={textBlack} />
      <WhatsBackstage textBlack={textBlack} />

      <Container
        style={{
          backgroundColor: "#FFEEE2",
          marginTop: 30,
          paddingTop: 20,
        }}
      >
        <Percentile />
        <HalfPie />
        <LandingRadar />
      </Container>
      <HowItWorks textBlack={textBlack} />

      <LandingFooter textBlack={textBlack} />
    </>
  )

  return <>{user ? <Redirect to="/home" /> : landingPage()}</>
}

export default LandingPage

// import React, { useEffect, useState } from "react"
// import { TextField, Typography, Container, Button } from "@material-ui/core"

// const styles = {
//   root: {
//     padding: 0,
//     margin: 0,
//   },
//   divBlack: {
//     paddingTop: 60,
//     paddingBottom: 60,
//     backgroundColor: "#1D1D1F",
//   },
//   textBlack: {
//     color: "#1D1D1F",
//   },
//   textWhite: {
//     color: "#FFFFFF",
//     letterSpacing: 2,
//     textAlign: "center",
//     fontSize: 90,
//   },
//   h2: {
//     color: "#1D1D1F",
//     letterSpacing: 1,
//     textAlign: "center",
//     fontSize: 60,
//   },
//   h3: {
//     color: "#1D1D1F",
//     letterSpacing: 2,
//     textAlign: "center",
//     fontSize: 42,
//     paddingTop: 10,
//     lineHeight: 1.2,
//   },
//   h4: {
//     color: "#1D1D1F",
//     textAlign: "center",
//     fontSize: 20,
//   },
//   h5: {
//     color: "#1D1D1F",
//     letterSpacing: 1,
//     textAlign: "center",
//     fontSize: 20,
//     fontWeight: 400,
//     paddingTop: 10,
//   },
//   textContainer: {
//     paddingTop: 60,
//     maxWidth: 760,
//   },
//   textContainer2: {
//     paddingTop: 20,
//     maxWidth: 400,
//   },
//   button: {
//     align: "center",
//     backgroundColor: "#1D1D1F",
//     color: "white",
//     marginTop: 20,
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingRight: 30,
//     paddingLeft: 30,
//     fontSize: 18,
//     fontWeight: 900,
//     letterSpacing: 1,
//   },
// }

// const LandingPage = () => {
//   return (
//     <Container style={styles.root} maxWidth={false} disableGutters>
//       <Container style={styles.divBlack} maxWidth={false} disableGutters>
//         <Typography style={styles.textWhite}>
//           <b>Waterfront</b>
//         </Typography>
//       </Container>

//       <Container style={null} maxWidth={false} disableGutters>
//         <Container style={styles.textContainer}>
//           <Typography style={styles.h2} variant="h3">
//             <b>11+ preparation powered by technology</b>
//           </Typography>
//           <Typography style={styles.h3}>
//             See how your child compares to other students
//           </Typography>
//         </Container>

//         <Container style={{ backgroundColor: "blue" }}>
//           <img src="https://i.imgur.com/J8OpY00.png" />
//         </Container>

//         <Typography style={styles.h4}>
//           <b>Achieve more</b>
//         </Typography>
//         <Container style={styles.textContainer2}>
//           <Typography style={styles.h5}>
//             Tap Search to do the 1st of almost anything. Or the whole thing.
//           </Typography>
//           <Button variant="contained " style={styles.button}>
//             Get Started
//           </Button>
//         </Container>
//       </Container>
//     </Container>
//   )
// }

// export default LandingPage
