import {
  Card,
  Header,
  Title,
  ToggleGroup,
  ToggleItem,
  ChartLayout,
  YAxis,
  AxisLabel,
  ChartArea,
  BarsRow,
  BarColumn,
  Bar,
  XAxis,
  TimeLabel,
} from "./styles";

const chartData = [
  { time: "06:00", value: 4 },
  { time: "07:00", value: 4 },
  { time: "08:00", value: 4 },
  { time: "09:00", value: 4 },
  { time: "10:00", value: 3 },
  { time: "11:00", value: 3 },
  { time: "12:00", value: 4 },
  { time: "13:00", value: 4 },
  { time: "14:00", value: 3 },
  { time: "15:00", value: 3 },
  { time: "16:00", value: 4 },
  { time: "17:00", value: 4 },
  { time: "18:00", value: 4 },
  { time: "19:00", value: 4 },
  { time: "20:00", value: 4 },
  { time: "21:00", value: 4 },
  { time: "22:00", value: 4 },
  { time: "23:00", value: 4 },
  { time: "00:00", value: 4 },
];

const yAxisLabels = ["10", "8", "6", "4", "2", "0"];
const maxValue = 10;

export default function OccupancyChart() {
  return (
    <Card>
      <Header>
        <Title>Ocupação por horário</Title>
        <ToggleGroup>
          <ToggleItem>Reservas</ToggleItem>
          <ToggleItem> x </ToggleItem>
          <ToggleItem>Horário</ToggleItem>
        </ToggleGroup>
      </Header>
      <ChartLayout>
        <YAxis>
          {yAxisLabels.map((label, index) => (
            <AxisLabel
              key={label}
              $position={(index / (yAxisLabels.length - 1)) * 100}
              $align={
                index === 0
                  ? "start"
                  : index === yAxisLabels.length - 1
                    ? "end"
                    : "middle"
              }
            >
              {label}
            </AxisLabel>
          ))}
        </YAxis>
        <ChartArea>
          <BarsRow>
            {chartData.map((point) => (
              <BarColumn key={point.time}>
                <Bar
                  style={{
                    ["--bar-height" as string]: `${(point.value / maxValue) * 100}%`,
                  }}
                />
              </BarColumn>
            ))}
          </BarsRow>
        </ChartArea>
        <XAxis>
          {chartData.map((point) => (
            <TimeLabel key={point.time}>{point.time}</TimeLabel>
          ))}
        </XAxis>
      </ChartLayout>
    </Card>
  );
}
