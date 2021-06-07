import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

const Answers = ({ gradedProblems }) => {
  const test = useSelector((state) => state.test)
  return (
    <>
      {gradedProblems.map((problem) => {
        const correct = problem.correct === problem.selected
        return (
          <div key={problem.question} style={{ marginBottom: 20 }}>
            <Typography>{problem.question}</Typography>
            <Typography>You answered: {problem.selected}</Typography>
            <Typography>{correct ? "correct" : "wrong"}</Typography>
            {!correct && (
              <Typography>The correct answer was {problem.correct}</Typography>
            )}
          </div>
        )
      })}
    </>
  )
}

export default Answers
