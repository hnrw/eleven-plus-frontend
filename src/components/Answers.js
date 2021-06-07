import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

const Answers = ({ gradedProblems }) => {
  return (
    <Container>
      {gradedProblems.map((problem, index) => {
        const correct = problem.correct === problem.selected
        return (
          <div key={problem.question} style={{ marginBottom: 20 }}>
            <Typography>
              <b>Question {index + 1}</b>
            </Typography>
            <Typography>{problem.question}</Typography>
            <Typography>
              <i>{problem.selected} </i>
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
