import React from "react"
import { Paper, Typography, Container } from "@material-ui/core"
import _ from "lodash"

const paperStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingRight: 20,
  paddingLeft: 20,
  marginRight: 20,
  cursor: "pointer",
}

const styles = {
  paperRed: { ...paperStyle, backgroundColor: "red" },
  paperGreen: { ...paperStyle, backgroundColor: "green" },
  paper: paperStyle,
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
    const paperStyle = {
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 20,
      paddingLeft: 20,
      marginRight: 20,
      cursor: "pointer",
    }
    if (option === problem.correct) {
      return { ...paperStyle, backgroundColor: "green" }
    }
    if (option === problem.selected) {
      return { ...paperStyle, backgroundColor: "red" }
    }
    return paperStyle
  }

  return (
    <Container>
      {orderedGradedProblems.map((problem, index) => {
        const correct = isCorrect(problem)
        return (
          <div key={problem.question} style={{ marginBottom: 20 }}>
            <Typography>
              <b>Question {index + 1}</b>
            </Typography>
            <Typography>{problem.question}</Typography>
            <img src={problem.img} />
            <div style={styles.flex}>
              {problem.options.map((option) => {
                const selected = true
                return (
                  <Paper
                    key={option}
                    // style={selected ? styles.paperSelected : styles.paper}
                    style={calculateColor(problem, option)}
                  >
                    <Typography
                      style={
                        {
                          // color: selected ? "white" : null,
                        }
                      }
                    >
                      {option}
                    </Typography>
                  </Paper>
                )
              })}
            </div>
            <Typography>
              <i>{problem.selected || "You did not answer this question"} </i>
              {correct ? "✔️" : "❌"}
            </Typography>
            {!correct && (
              <Typography>
                The correct answer was <b>{problem.correct}</b>
              </Typography>
            )}
          </div>
        )
      })}
    </Container>
  )
}

export default Answers
