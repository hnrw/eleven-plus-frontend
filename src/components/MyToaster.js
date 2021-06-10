import React from "react"
import { Toaster } from "react-hot-toast"

const MyToaster = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Roboto",
          },
        }}
      />
    </div>
  )
}

export default MyToaster
