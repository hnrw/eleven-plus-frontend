import React from "react"
import { Divider, Paper, Typography, Container } from "@material-ui/core"
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
}

const Answers = ({ gradedProblems }) => {
  console.log(gradedProblems)
  const orderedGradedProblems = _.sortBy(gradedProblems, (p) => p.num)

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
      {orderedGradedProblems.map((problem, index) => {
        const correct = isCorrect(problem)
        return (
          <div key={problem.question} style={styles.root}>
            <Typography>
              <b>Question {index + 1}</b>
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
                    // style={selected ? styles.paperSelected : styles.paper}
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
            {!problem.multi && (
              <>
                {/* <Typography style={{ color: "green" }}> */}
                <Typography>
                  {problem.selected ? (
                    <>
                      You answered: <b>{problem.selected}</b>
                    </>
                  ) : (
                    "You did not answer this question"
                  )}
                </Typography>
                {!correct && (
                  <Typography>
                    The correct answer was: <b>{problem.correct}</b>
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
