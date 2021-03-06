import React, { useEffect, useState } from "react"
import {
  Paper,
  TextField,
  Typography,
  Container,
  Button,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import { selectOption } from "../reducers/testReducer"
import _ from "lodash"

const styles = {
  paper: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginRight: 20,
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    marginTop: 10,
    marginBottom: 20,
  },
}

const Problem = ({ problem, viewOnly }) => {
  return (
    <div style={{ marginBottom: 50 }}>
      <Typography>
        <b>Question {problem.num}</b>
      </Typography>
      <Typography style={{ marginBottom: 10 }}>{problem.question}</Typography>
      {problem.img && (
        <div style={styles.center}>
          <img style={styles.img} src={problem.img} />
        </div>
      )}
      {problem.multi ? (
        <MultipleChoice problem={problem} viewOnly={viewOnly} />
      ) : (
        <InputAnswer problem={problem} viewOnly={viewOnly} />
      )}
    </div>
  )
}

const MultipleChoice = ({ problem, viewOnly }) => {
  const dispatch = useDispatch()
  const test = useSelector((state) => state.test)

  const [shuffledOptions, setShuffledOptions] = useState([])

  useEffect(() => {
    setShuffledOptions(_.shuffle(problem.options))
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {shuffledOptions.map((option) => {
        const selected = problem.selected === option
        return (
          <Paper
            key={option}
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingRight: 20,
              paddingLeft: 20,
              marginRight: 20,
              backgroundColor: selected ? "#4287f5" : null,
              textColor: "white",
              cursor: "pointer",
            }}
            onClick={
              viewOnly
                ? null
                : () => dispatch(selectOption(test, problem.question, option))
            }
          >
            <Typography
              style={{
                color: selected ? "white" : null,
              }}
            >
              {option}
            </Typography>
          </Paper>
        )
      })}
    </div>
  )
}

const InputAnswer = ({ problem, viewOnly }) => {
  const dispatch = useDispatch()
  const test = useSelector((state) => state.test)

  const handleChange = (input) => {
    dispatch(selectOption(test, problem.question, input))
  }

  return (
    <>
      {!viewOnly && (
        <>
          <TextField
            type="number"
            onChange={() => handleChange(event.target.value)}
            defaultValue={problem.selected}
            // prevents scroll changing the input
            onWheelCapture={(e) => {
              e.target.blur()
            }}
          />
          {problem.unit && (
            <Typography display="inline">{problem.unit}</Typography>
          )}
        </>
      )}
    </>
  )
}

export default Problem
