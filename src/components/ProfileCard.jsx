import { Star, CheckCircle2, Clock } from 'lucide-react'

export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 text-white">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="relative mb-3">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center text-2xl font-bold">
            AJ
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900" />
        </div>
        <h3 className="font-bold text-base">Alex Johnson</h3>
        <p className="text-slate-400 text-xs mt-0.5 font-medium">Product Manager</p>
        <div className="flex items-center gap-1 mt-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={11} className={s <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'} />
          ))}
          <span className="text-slate-400 text-xs ml-1">4.8</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-700/50 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-medium">Done</span>
          </div>
          <p className="text-xl font-bold">32</p>
          <p className="text-slate-400 text-xs">Tasks</p>
        </div>
        <div className="bg-slate-700/50 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock size={13} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-medium">Active</span>
          </div>
          <p className="text-xl font-bold">8</p>
          <p className="text-slate-400 text-xs">In Progress</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-slate-400 font-medium">Sprint Progress</span>
          <span className="text-white font-semibold">80%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full" style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  )
}
