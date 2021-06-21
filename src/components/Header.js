import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Divider } from "@material-ui/core"
import toast from "react-hot-toast"
import stripeService from "../services/stripeService"
import wave from "../assets/wave.png"
import logotext from "../assets/logotext.png"

import { clearUser } from "../reducers/userReducer"
import { clearProfile } from "../reducers/profileReducer"
import { clearTest } from "../reducers/testReducer"
import { clearStripe } from "../reducers/stripeReducer"

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const stripe = useSelector((state) => state.stripe)

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(clearUser())
    dispatch(clearProfile())
    dispatch(clearTest())
    dispatch(clearStripe())
    history.push("/")
  }

  const handlePortal = async () => {
    const url = await stripeService.portal(stripe.stripeId)
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
      <Button onClick={handlePortal}>Account</Button>
      {user.email === "pannicope@gmail.com" && (
        <HeaderItem link="/admin">Admin</HeaderItem>
      )}
      <Button onClick={handleLogout}>Log out</Button>
    </>
  )

  return (
    <>
      <AppBar position="static" style={{ margin: 0, backgroundColor: "white" }}>
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
      </AppBar>
    </>
  )
}

export default Header
