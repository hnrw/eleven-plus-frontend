import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
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

  useEffect(() => {
    if (user) {
      gradedTestService
        .fetchTests(user.token)
        .then((r) => setGradedTestsList(r))
    }
  }, [user])

  return (
    <>
      {gradedTestsList.map((gt) => (
        <Link
          to={`/results/${gt.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button>{gt.id}</Button>
        </Link>
      ))}
    </>
  )
}

export default ResultsList
