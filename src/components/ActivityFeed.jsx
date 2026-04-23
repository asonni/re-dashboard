import { CheckCircle2, MessageSquare, UserPlus, FileText, AlertCircle } from 'lucide-react'

const activities = [
  {
    id: 1,
    icon: CheckCircle2,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    message: 'Task "API Integration" completed',
    actor: 'Sam K.',
    time: '2m ago',
  },
  {
    id: 2,
    icon: MessageSquare,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    message: 'New comment on "Landing Page"',
    actor: 'Alex J.',
    time: '15m ago',
  },
  {
    id: 3,
    icon: UserPlus,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    message: 'Rachel M. joined the project',
    actor: 'Rachel M.',
    time: '1h ago',
  },
  {
    id: 4,
    icon: FileText,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    message: 'Report Q1 2024 was uploaded',
    actor: 'Tom L.',
    time: '3h ago',
  },
  {
    id: 5,
    icon: AlertCircle,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
    message: '"Payment Bug" marked overdue',
    actor: 'System',
    time: '5h ago',
  },
]

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-800">Recent Activity</h3>
        <button className="text-xs text-indigo-600 font-semibold hover:text-indigo-700">See all</button>
      </div>
      <div className="space-y-3">
        {activities.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                <Icon size={14} className={item.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-700 font-medium leading-snug">{item.message}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-slate-400">{item.actor}</span>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
