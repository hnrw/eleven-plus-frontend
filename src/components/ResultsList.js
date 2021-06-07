import React, { useEffect, useState } from "react"
import { TextField, Typography, Container, Button } from "@material-ui/core"
import gradedTestService from "../services/gradedTestService"
import { useDispatch, useSelector } from "react-redux"

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
        <div>{gt.id}</div>
      ))}
    </>
  )
}

export default ResultsList
