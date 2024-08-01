import { TemperatureRecord } from '../types';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { format } from 'date-fns';

//prettier-ignore
const json: { datetime: string; temperature: number }[] = [];
const data: TemperatureRecord[] = json.map(({ datetime, temperature }) => ({
  temperature,
  datetime: new Date(datetime),
}));

function App() {
  return (
    <main className="p-8">
      <LineChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <XAxis
          dataKey="datetime"
          tickFormatter={(value) => format(value, 'h:mm')}
        />
        <YAxis
          dataKey="temperature"
          domain={[25, 32]}
          tickCount={8}
          tickLine={false}
          unit={'℃'}
        />
        <Line type="basis" stroke="#8884d8" dataKey="temperature" dot={false} />
      </LineChart>
    </main>
  );
}

export default App;
