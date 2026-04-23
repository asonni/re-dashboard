import {
  LayoutDashboard,
  Users,
  Activity,
  CheckSquare,
  Calendar,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Team' },
  { icon: Activity, label: 'Activity' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Calendar, label: 'Calendar' },
  { icon: BarChart2, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <aside className="w-60 bg-slate-900 flex flex-col h-screen sticky top-0 shrink-0">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-700/50">
        <span className="text-white text-2xl font-bold tracking-tight">re.</span>
        <span className="text-slate-400 text-xs ml-2 font-medium uppercase tracking-widest">dashboard</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider px-3 mb-3">Main Menu</p>
        <ul className="space-y-1">
          {navItems.map(({ icon: Icon, label }) => (
            <li key={label}>
              <button
                onClick={() => setActiveItem(label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeItem === label
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                }`}
              >
                <Icon size={18} className={activeItem === label ? 'text-white' : 'text-slate-500'} />
                {label}
                {label === 'Tasks' && (
                  <span className="ml-auto bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2 py-0.5 rounded-full">
                    12
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Upgrade Card */}
        <div className="mt-6 mx-1 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-yellow-300" />
            <span className="text-sm font-semibold">Upgrade Plan</span>
          </div>
          <p className="text-xs text-indigo-200 mb-3 leading-relaxed">
            Unlock advanced analytics and unlimited team members.
          </p>
          <button className="w-full bg-white text-indigo-700 text-xs font-semibold py-2 rounded-lg hover:bg-indigo-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-4 border-t border-slate-700/50 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-all">
          <HelpCircle size={18} className="text-slate-500" />
          Help & Support
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-900/30 hover:text-red-400 transition-all">
          <LogOut size={18} className="text-slate-500" />
          Log Out
        </button>
      </div>
    </aside>
  )
}
