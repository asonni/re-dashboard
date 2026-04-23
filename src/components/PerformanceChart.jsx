import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  { day: 'Mon', Completed: 12, InProgress: 8 },
  { day: 'Tue', Completed: 19, InProgress: 14 },
  { day: 'Wed', Completed: 14, InProgress: 10 },
  { day: 'Thu', Completed: 22, InProgress: 16 },
  { day: 'Fri', Completed: 18, InProgress: 12 },
  { day: 'Sat', Completed: 25, InProgress: 9 },
  { day: 'Sun', Completed: 20, InProgress: 7 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
        <p className="text-slate-400 text-xs font-medium mb-2">{label}</p>
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2 text-sm">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-slate-300 font-medium">{entry.name}:</span>
            <span className="text-white font-bold">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function PerformanceChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-slate-800">Performance Overview</h2>
          <p className="text-slate-500 text-xs mt-0.5">Tasks completed vs in progress this week</p>
        </div>
        <div className="flex gap-2">
          {['Week', 'Month', 'Year'].map((p, i) => (
            <button
              key={p}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                i === 0
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="day"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '12px', paddingTop: '12px', color: '#64748b' }}
            formatter={(value) => <span style={{ color: '#64748b', fontWeight: 500 }}>{value}</span>}
          />
          <Line
            type="monotone"
            dataKey="Completed"
            stroke="#6366f1"
            strokeWidth={2.5}
            dot={{ fill: '#6366f1', r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="InProgress"
            stroke="#f97316"
            strokeWidth={2.5}
            dot={{ fill: '#f97316', r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
