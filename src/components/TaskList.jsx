import { MoreHorizontal, Flag } from 'lucide-react'

const tasks = [
  {
    id: 1,
    title: 'Redesign landing page hero section',
    status: 'In Progress',
    priority: 'High',
    assignee: 'AJ',
    avatarBg: 'bg-indigo-500',
    due: 'Apr 28',
  },
  {
    id: 2,
    title: 'Set up CI/CD pipeline for staging',
    status: 'Completed',
    priority: 'Medium',
    assignee: 'SK',
    avatarBg: 'bg-emerald-500',
    due: 'Apr 25',
  },
  {
    id: 3,
    title: 'Write unit tests for auth module',
    status: 'In Progress',
    priority: 'High',
    assignee: 'RM',
    avatarBg: 'bg-purple-500',
    due: 'Apr 30',
  },
  {
    id: 4,
    title: 'Update API documentation',
    status: 'Overdue',
    priority: 'Low',
    assignee: 'TL',
    avatarBg: 'bg-orange-500',
    due: 'Apr 20',
  },
  {
    id: 5,
    title: 'Conduct user research interviews',
    status: 'Completed',
    priority: 'Medium',
    assignee: 'AJ',
    avatarBg: 'bg-indigo-500',
    due: 'Apr 24',
  },
  {
    id: 6,
    title: 'Fix payment gateway timeout bug',
    status: 'Overdue',
    priority: 'High',
    assignee: 'SK',
    avatarBg: 'bg-emerald-500',
    due: 'Apr 22',
  },
]

const statusConfig = {
  'In Progress': 'bg-blue-50 text-blue-600 border-blue-100',
  Completed: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  Overdue: 'bg-red-50 text-red-500 border-red-100',
}

const priorityConfig = {
  High: 'text-red-500',
  Medium: 'text-amber-500',
  Low: 'text-slate-400',
}

export default function TaskList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h2 className="text-base font-bold text-slate-800">Current Tasks</h2>
          <p className="text-slate-500 text-xs mt-0.5">Showing {tasks.length} tasks</p>
        </div>
        <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors">
          View all →
        </button>
      </div>
      <div className="divide-y divide-gray-50">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50/60 transition-colors group">
            <input
              type="checkbox"
              defaultChecked={task.status === 'Completed'}
              className="w-4 h-4 rounded accent-indigo-600 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-medium truncate ${
                  task.status === 'Completed' ? 'line-through text-slate-400' : 'text-slate-700'
                }`}
              >
                {task.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Due {task.due}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className={`flex items-center gap-1 text-xs font-semibold ${priorityConfig[task.priority]}`}>
                <Flag size={11} />
                {task.priority}
              </span>
              <span
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${statusConfig[task.status]}`}
              >
                {task.status}
              </span>
              <div
                className={`w-7 h-7 rounded-full ${task.avatarBg} flex items-center justify-center text-white text-xs font-bold`}
              >
                {task.assignee}
              </div>
              <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 transition-all">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
