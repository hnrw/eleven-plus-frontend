import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import dayjs from "dayjs"
import gradedTestService from "../services/gradedTestService"
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"

const ResultsList = () => {
  const [gradedTestsList, setGradedTestsList] = useState([])
  const user = useSelector((state) => state.user)
  document.title = "Waterfront - Results"

  useEffect(() => {
    if (user) {
      gradedTestService
        .fetchTests(user.token)
        .then((r) => setGradedTestsList(r))
    }
  }, [user])

  return (
    <Container>
      {gradedTestsList.length === 0 && (
        <>
          <Typography>Take your first test to see results</Typography>
          <Link to="/home">
            <Button>Home</Button>
          </Link>
        </>
      )}
      {gradedTestsList.map((gt) => (
        <Link
          to={`/results/${gt.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography variant="h4">Maths Test {gt.num}</Typography>
          <Typography>{dayjs(gt.date).format("D MMM h:mma")}</Typography>
          <Typography>{gt.percent}%</Typography>
          <Typography>
            {gt.marks}/{gt.total} marks
          </Typography>
        </Link>
      ))}
    </Container>
  )
}

export default ResultsList
