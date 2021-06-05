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
      <Typography>Henry marks are better than</Typography>
      <Typography variant="h3">83%</Typography>
      <Typography>of Waterfront students</Typography>
    </span>
  </div>
)

export default HalfPie
