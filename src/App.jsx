import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import PerformanceChart from './components/PerformanceChart'
import TaskList from './components/TaskList'
import ProfileCard from './components/ProfileCard'
import ActivityFeed from './components/ActivityFeed'
import MessageInput from './components/MessageInput'
import { CheckSquare, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

const stats = [
  {
    title: 'Total Tasks',
    value: '128',
    icon: CheckSquare,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    trend: 'up',
    trendValue: '+12%',
  },
  {
    title: 'Completed',
    value: '64',
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    trend: 'up',
    trendValue: '+8%',
  },
  {
    title: 'In Progress',
    value: '42',
    icon: Clock,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    trend: 'up',
    trendValue: '+5%',
  },
  {
    title: 'Overdue',
    value: '22',
    icon: AlertCircle,
    color: 'text-red-500',
    bg: 'bg-red-50',
    trend: 'down',
    trendValue: '-3%',
  },
]

function App() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 min-w-0">
        <Header />
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <StatsCard key={s.title} {...s} />
          ))}
        </div>
        <PerformanceChart />
        <TaskList />
      </main>
      <aside className="w-72 bg-white border-l border-gray-100 overflow-y-auto p-4 flex flex-col gap-4 shrink-0">
        <ProfileCard />
        <ActivityFeed />
        <MessageInput />
      </aside>
    </div>
  )
}

export default App
