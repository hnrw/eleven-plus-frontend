import React, { useState } from "react"
import {
  Button,
  Divider,
  Paper,
  Typography,
  Container,
} from "@material-ui/core"
import _ from "lodash"

const paperStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 20,
  paddingLeft: 20,
  marginRight: 20,
}

const styles = {
  paperRed: { ...paperStyle, backgroundColor: "#FDE2DD" },
  paperGreen: {
    ...paperStyle,
    backgroundColor: "#CBF4C9",
  },
  paper: paperStyle,
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  root: {
    marginBottom: 20,
  },
  divider: {
    marginTop: 40,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
}

const Answers = ({ gradedProblems }) => {
  const [view, setView] = useState("all")
  const correct = (p) => p.selected === p.correct
  const incorrect = (p) => p.selected !== p.correct

  const filteredProblems =
    view === "all"
      ? gradedProblems
      : view === "correct"
      ? gradedProblems.filter(correct)
      : gradedProblems.filter(incorrect)

  const orderedGradedProblems = _.sortBy(filteredProblems, (p) => p.num)

  const isCorrect = (p) => {
    if (p.multi) {
      return p.selected === p.correct
    }
    return Number(p.selected) === Number(p.correct)
  }

  const calculateColor = (problem, option) => {
    if (option === problem.correct) {
      return "green"
    }
    if (option === problem.selected) {
      return "red"
    }
    return null
  }

  return (
    <Container>
      <Container style={styles.buttonContainer}>
        <Button
          color={view === "all" ? "primary" : "default"}
          onClick={() => setView("all")}
        >
          All
        </Button>
        <Button
          color={view === "correct" ? "primary" : "default"}
          onClick={() => setView("correct")}
        >
          Correct
        </Button>
        <Button
          color={view === "incorrect" ? "primary" : "default"}
          onClick={() => setView("incorrect")}
        >
          Incorrect
        </Button>
      </Container>
      {orderedGradedProblems.map((problem) => {
        const correct = isCorrect(problem)
        return (
          <div key={problem.question} style={styles.root}>
            <Typography>
              <b>Question {problem.num}</b>
              {correct ? " ✔️" : " ❌"}
            </Typography>
            <Typography>{problem.question}</Typography>
            <img src={problem.img} />
            <div style={styles.flex}>
              {problem.options.map((option) => {
                const color = calculateColor(problem, option)
                return (
                  <Paper
                    key={option}
                    style={
                      color === "green"
                        ? styles.paperGreen
                        : color === "red"
                        ? styles.paperRed
                        : styles.paper
                    }
                  >
                    <Typography
                      style={{
                        color:
                          color === "green"
                            ? "#0E6245"
                            : color === "red"
                            ? "#A41C4E"
                            : null,
                        fontWeight:
                          color === "green" || color === "red" ? "bold" : null,
                        letterSpacing:
                          color === "green" || color === "red" ? 0.5 : null,
                      }}
                    >
                      {option}
                    </Typography>
                  </Paper>
                )
              })}
            </div>
            {!problem.selected && (
              <Typography style={{ marginTop: 30 }}>
                <i>You did not answer this question</i>
              </Typography>
            )}
            {!problem.multi && (
              <>
                <Typography>
                  {problem.selected && (
                    <>
                      You answered: <b>{problem.selected}</b> {problem.unit}
                    </>
                  )}
                </Typography>
                {!correct && (
                  <Typography>
                    The correct answer was: <b>{problem.correct}</b>{" "}
                    {problem.unit}
                  </Typography>
                )}
              </>
            )}
            <Divider style={styles.divider} />
          </div>
        )
      })}
    </Container>
  )
}

export default Answers
