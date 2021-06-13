import React from "react"
import { Typography, Link } from "@material-ui/core"

const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "2.5rem",
          // backgroundColor: "#FFEEE2",
          backgroundColor: "#D8E2FC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href="mailto:henry@henrywu.co.uk"
          style={{
            textAlign: "center",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener"
        >
          <Typography color="textPrimary">
            Get in touch: henry@henrywu.co.uk
          </Typography>
        </Link>
      </div>
    </>
  )
}

export default Footer
