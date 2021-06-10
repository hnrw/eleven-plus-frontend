import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Divider } from "@material-ui/core"
import toast from "react-hot-toast"
import stripeService from "../services/stripeService"
import wave from "../assets/wave.png"
import logotext from "../assets/logotext.png"

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

  const handlePortal = async () => {
    const url = await stripeService.portal("cus_JdpOfqNdv2VRhP")
    window.location.replace(url)
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
      <HeaderItem link="/login">Log in</HeaderItem>
      <HeaderItem link="/signup">Get Started</HeaderItem>
    </>
  )

  const loggedIn = () => (
    <>
      <HeaderItem link="/results">Results</HeaderItem>
      <HeaderItem link="/stats">Stats</HeaderItem>
      <Button onClick={handlePortal}>Portal</Button>
      {user.email === "pannicope@gmail.com" && (
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
            <span>
              <img src={logotext} style={{ height: 20, display: "inline" }} />
            </span>
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
