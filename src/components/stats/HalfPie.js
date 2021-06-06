import { ResponsivePie } from "@nivo/pie"
import {
  TextField,
  Container,
  Button,
  Typography,
  Grid,
} from "@material-ui/core"
import pointer from "../../assets/pointer.svg"

const data = [
  {
    id: "0 - 20%",
    value: 20,
    color: "#db4f4f",
  },
  {
    id: "20 - 40%",
    value: 20,
    color: "#ffbb00",
  },
  {
    id: "40 - 60%",
    value: 20,
    color: "#faff6b",
  },
  {
    id: "60 - 80%",
    value: 20,
    color: "#8CED5D",
  },
  {
    id: "80 - 90%",
    value: 10,
    color: "#00d939",
  },
  {
    id: "90 - 100%",
    value: 10,
    color: "#00e1ff",
  },
]

const margin = { top: 40, right: 80, bottom: 80, left: 80 }

const angle = (percent) => {
  // pointer is positioned slightly above the bottom of the chart
  // so needs slightly larger than 180deg to cover full arc

  // pointer is slightly unsymmetrical, so needs a bit extra to reach 100%
  return -95 + percent * 1.91
}

const HalfPie = () => (
  <div
    style={{
      height: 450,
      position: "relative",
    }}
  >
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.7}
      padAngle={0.7}
      startAngle={-90}
      endAngle={90}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLabel="id"
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      enableArcLinkLabels={false}
      colors={{ datum: "data.color" }}
      theme={{ fontSize: 14 }}
    />
    <span
      style={{
        position: "absolute",
        // top: 100,
        right: margin.right,
        bottom: -140,
        left: margin.left,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <img
        src={pointer}
        style={{
          height: 500,
          transform: "rotate(20deg)",
          transform: `rotate(${angle(83)}deg)`,
        }}
      />
    </span>
  </div>
)

export default HalfPie
