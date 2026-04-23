import { Send, Paperclip, Smile } from 'lucide-react'
import { useState } from 'react'

export default function MessageInput() {
  const [message, setMessage] = useState('')

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <h3 className="text-sm font-bold text-slate-800 mb-3">Quick Message</h3>
      <div className="relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message to your team..."
          rows={3}
          className="w-full resize-none text-sm text-slate-700 placeholder-slate-400 border border-gray-200 rounded-xl px-3 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-1">
          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <Paperclip size={15} />
          </button>
          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <Smile size={15} />
          </button>
        </div>
        <button
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            message.trim()
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-500/20'
              : 'bg-slate-100 text-slate-400 cursor-default'
          }`}
        >
          <Send size={12} />
          Send
        </button>
      </div>
    </div>
  )
}
