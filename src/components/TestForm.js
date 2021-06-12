import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import { v4 as uuid } from "uuid"
import testService from "../services/testService"
import { toast } from "react-hot-toast"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"

const TestForm = () => {
  const [problems, setProblems] = useState([])
  const history = useHistory()

  const handleSubmit = async () => {
    event.preventDefault()

    const createOptions = problems.map((p) => ({
      ...p,
      options: p.options ? p.options.split(",").concat(p.correct) : null,
      multi: !!p.options,
    }))

    const test = {
      problems: createOptions,
    }

    try {
      await testService.createTest(test)
      history.push("/admin")
      // problems aren't saved in db instantly because of the way the tests controller works
      location.reload()
    } catch (err) {
      toast.error("unexpected error")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {problems.map((p, index) => (
          <div key={p.uuid}>
            <Typography>Question {index + 1}</Typography>
            <ProblemDisplay
              problem={p}
              index={index}
              problems={problems}
              setProblems={setProblems}
            />
          </div>
        ))}

        <ProblemForm problems={problems} setProblems={setProblems} />

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  )
}

const ProblemDisplay = ({ problem, problems, setProblems }) => {
  const [editing, setEditing] = useState(false)
  return !editing ? (
    <div style={{ marginBottom: 20 }}>
      <Typography>{problem.question}</Typography>
      <Typography>Correct Answer: {problem.correct}</Typography>
      <Typography>Options: {problem.options}</Typography>
      <Button onClick={() => setEditing(true)}> Edit </Button>
    </div>
  ) : (
    <ProblemForm
      problems={problems}
      setProblems={setProblems}
      editProblem={problem}
      setEditing={setEditing}
    />
  )
}

const ProblemForm = ({ problems, setProblems, editProblem, setEditing }) => {
  const [question, setQuestion] = useState(editProblem?.question || "")
  const [correct, setCorrect] = useState(editProblem?.correct || "")
  const [options, setOptions] = useState(editProblem?.options || "")

  const handleSave = () => {
    event.preventDefault()

    const np = {
      question,
      correct,
      options,
      uuid: uuid(),
    }

    if (editProblem) {
      // seperate save logic if component is editing an existing problem
      const newProblems = problems.map((p) =>
        p.uuid === editProblem.uuid ? np : p
      )
      setProblems(newProblems)
      setEditing(false)
      return
    }

    setProblems(problems.concat(np))

    setQuestion("")
    setCorrect("")
    setOptions("")
  }

  return (
    <>
      <div>
        <TextField
          label="Question"
          value={question}
          onChange={() => setQuestion(event.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Correct Answer"
          value={correct}
          onChange={() => setCorrect(event.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Options"
          value={options}
          onChange={() => setOptions(event.target.value)}
        />
      </div>
      <Button onClick={handleSave}>Save</Button>
    </>
  )
}

export default TestForm
