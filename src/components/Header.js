import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppBar, Toolbar, Typography, Button, Divider } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom"
import { clearUser } from "../reducers/userReducer"

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(clearUser())
    dispatch(clearCredits())
    window.sessionStorage.removeItem("savedQuestion")
  }

  const mobile = window.innerWidth <= 500

  const loggedIn = () => (
    <>
      {window.location.host === "localhost:3000" && (
        <Link
          to="/request-questions"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Button>RequestQuestion</Button>
        </Link>
      )}
      <Link
        to={`/${user.username}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Button>{user.username}</Button>
      </Link>
      <Link to="/account" style={{ textDecoration: "none", color: "#000" }}>
        <Button>Account</Button>
      </Link>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )

  const loggedOut = () => (
    <>
      <Button onClick={() => history.push("/login")}>Log in</Button>
      <Button onClick={() => history.push("/signup")}>Sign up</Button>
    </>
  )

  return (
    <>
      <AppBar position="fixed" style={{ margin: 0, backgroundColor: "white" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography
              variant="h6"
              noWrap
              style={{ fontSize: mobile ? 16 : null }}
            >
              Backstage
            </Typography>
          </Link>
          <section style={{ marginLeft: "auto", marginRight: 0 }}>
            {/* somehow sets to the right of the app bar
  marginRight not needed here, but could play with positioning */}
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
