import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Divider } from "@material-ui/core"
import toast from "react-hot-toast"

import { clearUser } from "../reducers/userReducer"

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(clearUser())
    history.push("/login")
  }

  const HeaderItem = (props) => {
    return (
      <Link to={props.link} style={{ textDecoration: "none", color: "black" }}>
        <Button>{props.children}</Button>
      </Link>
    )
  }

  const loggedOut = () => (
    <>
      <HeaderItem link="stats">Stats</HeaderItem>
      <HeaderItem link="login">Log in</HeaderItem>
      <HeaderItem link="signup">Sign up</HeaderItem>
    </>
  )

  const loggedIn = () => (
    <>
      {user.isTeacher && <HeaderItem link="students">Students</HeaderItem>}
      {!user.isTeacher && (
        <HeaderItem link="/flashcard/f">Flashcards</HeaderItem>
      )}
      {user.email === "henry@henrywu.co.uk" && (
        <HeaderItem link="/admin">Admin</HeaderItem>
      )}
      <Button onClick={handleLogout}>Log out</Button>
    </>
  )

  return (
    <>
      <span>
        {user?.email} {user?.name}
      </span>
      <AppBar position="fixed" style={{ margin: 0, backgroundColor: "white" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h6" noWrap>
              Waterfront
            </Typography>
          </Link>
          {/* somehow sets to the right of the app bar marginRight not needed here, but could play with positioning */}
          <section style={{ marginLeft: "auto", marginRight: 0 }}>
            {user ? loggedIn() : loggedOut()}
          </section>
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
