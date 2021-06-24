import React from "react"
import { Typography, Button, Container } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import stripeService from "../../services/stripeService"

const styles = {
  container: {
    backgroundColor: "#D8E2FC",
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 100,
    paddingLeft: 100,
  },
  header: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  subHeadher: {
    letterSpacing: 1,
    textAlign: "center",
    color: "121D1E",
    marginBottom: 80,
  },
  text: {
    textAlign: "center",
    color: "121D1E",
  },
  button: {
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    textTransform: "none",
  },
}

const LandingFooter = ({ textBlack }) => {
  const history = useHistory()
  return (
    <Container maxWidth={false} style={styles.container}>
      <Container maxWidth="md">
        <Typography style={styles.header} variant="h3">
          <b>Start your child's journey to a top grammar school today</b>
        </Typography>
        <Typography variant="h5" style={styles.subHeadher}>
          Try Waterfront free for 14-days
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => history.push("/signup")}
          style={styles.button}
        >
          Start preparing for the 11+ exam
        </Button>
        <Typography style={styles.text}>
          Get started today with zero risk
        </Typography>
      </Container>
    </Container>
  )
}

export default LandingFooter
