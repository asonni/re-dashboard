import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatsCard({ title, value, icon: Icon, color, bg, trend, trendValue }) {
  const isUp = trend === 'up'
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2.5 rounded-xl ${bg}`}>
          <Icon size={20} className={color} />
        </div>
        <span
          className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
          }`}
        >
          {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {trendValue}
        </span>
      </div>
      <p className="text-3xl font-bold text-slate-800">{value}</p>
      <p className="text-slate-500 text-sm mt-1 font-medium">{title}</p>
    </div>
  )
}
