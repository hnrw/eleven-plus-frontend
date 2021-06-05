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
    id: "1",
    label: "1",
    value: 20,
    color: "hsl(133, 70%, 50%)",
  },
  {
    id: "2",
    label: "2",
    value: 20,
    color: "hsl(241, 70%, 50%)",
  },
  {
    id: "3",
    label: "3",
    value: 20,
    color: "hsl(314, 70%, 50%)",
  },
  {
    id: "4",
    label: "4",
    value: 20,
    color: "hsl(264, 70%, 50%)",
  },
  {
    id: "5",
    label: "5",
    value: 20,
    color: "hsl(197, 70%, 50%)",
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
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      enableArcLinkLabels={false}
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
