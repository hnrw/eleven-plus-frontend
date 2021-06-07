import React from "react"
import { Typography, Button, Container } from "@material-ui/core"
import { useHistory } from "react-router-dom"

const LandingFooter = ({ textBlack }) => {
  const history = useHistory()
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "#D8E2FC",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          style={{
            marginBottom: 20,
            letterSpacing: 1,
            textAlign: "center",
            color: textBlack,
          }}
        >
          <b>Get started today</b>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => history.push("/signup")}
          style={{ marginBottom: 20, paddingTop: 10, paddingBottom: 10 }}
        >
          Sign up
        </Button>
      </Container>
    </Container>
  )
}

export default LandingFooter
