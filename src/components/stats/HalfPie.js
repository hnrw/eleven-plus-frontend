import { ResponsivePie } from "@nivo/pie"
import {
  TextField,
  Container,
  Button,
  Typography,
  Grid,
} from "@material-ui/core"

const data = [
  {
    id: "lisp",
    // el: "lisp",
    value: 20,
    color: "hsl(133, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 20,
    color: "hsl(241, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 20,
    color: "hsl(314, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 20,
    color: "hsl(264, 70%, 50%)",
  },
  {
    id: "hack",
    label: "hack",
    value: 20,
    color: "hsl(197, 70%, 50%)",
  },
]

const margin = { top: 40, right: 80, bottom: 80, left: 80 }

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{
        height: 150,
        transform: "scaleY(2)",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7l4-4m0 0l4 4m-4-4v18"
      />
    </svg>
  )
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
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      enableArcLinkLabels={false}
    />
    <span
      style={{
        position: "absolute",
        top: 100,
        right: margin.right,
        bottom: 0,
        left: margin.left,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <Arrow />
    </span>
  </div>
)

export default HalfPie
