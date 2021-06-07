import React from "react"
import { Typography, Container, Grid, Paper } from "@material-ui/core"

const LandingMain = ({ textBlack }) => {
  const paragraphStyle = {
    color: textBlack,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
  }
  const gridStyle = {
    paddingLeft: 20,
    paddingRight: 2,
  }
  const paperStyle = {
    paddingTop: 20,
    paddingBottom: 15,
    paddingRight: "10%",
    paddingLeft: "10%",
    minHeight: 200,
    display: "flex",
    alignItems: "center",
  }

  return (
    <Container
      maxWidth={false}
      style={{
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          style={{
            marginBottom: 40,
            letterSpacing: 1,
            textAlign: "center",
            color: textBlack,
          }}
        >
          <b>For Creators, Influencers and Thought Leaders</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} style={gridStyle}>
            <Paper style={paperStyle}>
              <Typography paragraph style={paragraphStyle}>
                You get a lot of messages every day. Most of them are low
                quality, trolling, or the same question you’ve been asked a
                thousand times...even though you’ve already answered it.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} style={gridStyle}>
            <Paper style={paperStyle}>
              <Typography paragraph style={paragraphStyle}>
                Filter out the junk and only interact with your most
                enthusiastic fans, who ask you thought-provoking questions that
                lead to meaningful interaction.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} style={gridStyle}>
            <Paper style={paperStyle}>
              <Typography paragraph style={paragraphStyle}>
                Lend your expertise to help your fans with their burning
                questions. Have deep, nuanced conversations and share meaningful
                advice. Or just hang out and interact with cool people you enjoy
                talking to.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} style={gridStyle}>
            <Paper style={paperStyle}>
              <Typography paragraph style={paragraphStyle}>
                Build a sustainable revenue stream directly with your fans,
                instead of relying on opaque algorithms or flaky ad revenue
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          style={{
            marginTop: 40,
            marginBottom: 40,
            letterSpacing: 1,
            textAlign: "center",
            color: textBlack,
          }}
        >
          <b>For Fans</b>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} style={gridStyle}>
            <Paper style={paperStyle}>
              <Typography paragraph style={paragraphStyle}>
                No more nervously anticipating a response to your cold email.
                Connect with your favorite people on the internet, and get a
                meaningful response to your burning questions.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} style={gridStyle}>
            <Grid item xs={6} style={gridStyle} />
            <Paper style={paperStyle}>
              <Typography paragraph style={paragraphStyle}>
                Support your favorite people directly. They get the freedom to
                do their best work without being a slave to ad revenue. You get
                more than a generic “thank you to my supporters on patreon” in
                return.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} style={gridStyle}>
            <Grid item xs={6} style={gridStyle} />
            <Paper style={paperStyle}>
              <Typography paragraph>
                Get their full attention instead of being lost in the crowd.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6} style={gridStyle}>
            <Grid item xs={6} style={gridStyle} />
            <Paper style={paperStyle}>
              <Typography paragraph style={paragraphStyle}>
                More of a lurker? No problem. Subscribe to their feed to be a
                “fly on the wall” for their insightful conversations.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default LandingMain
