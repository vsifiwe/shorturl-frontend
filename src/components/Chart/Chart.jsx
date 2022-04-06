import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { count } from "../../utils/populateChart";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

export default function Chart() {
  const theme = useTheme();

  const data = count(useSelector((state) => state.auth.currentView.data));

  return (
    <React.Fragment>
      <h2>Today</h2>
      <ResponsiveContainer>
        {/* <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart> */}
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="device"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
