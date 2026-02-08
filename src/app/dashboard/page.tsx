"use client";

import Link from "next/link";
import { Radio, Headphones, AlertTriangle, GraduationCap, ArrowRight, Flame, Clock, CheckCircle2, Circle, Target } from "lucide-react";

const skills = [
  { name: "Radiotelephony", icon: Radio, progress: 72, href: "/dashboard/radiotelephony" },
  { name: "Listening Comprehension", icon: Headphones, progress: 48, href: "/dashboard/listening" },
  { name: "Emergency English", icon: AlertTriangle, progress: 35, href: "/dashboard/emergency" },
  { name: "ICAO Test Preparation", icon: GraduationCap, progress: 60, href: "/dashboard/icao-prep" },
];

const tasks = [
  { title: "Complete approach phraseology drill", done: false, priority: true },
  { title: "Practise emergency declaration scenario", done: false, priority: true },
  { title: "Review ATC accent comprehension feedback", done: true, priority: false },
  { title: "ICAO Speaking mock test — Level 5 target", done: false, priority: false },
  { title: "Non-routine weather diversion simulation", done: false, priority: false },
];

const recentActivity = [
  { text: "Completed ILS approach phraseology drill — 91% accuracy", time: "2 hours ago" },
  { text: "Emergency: Engine failure after takeoff scenario", time: "Yesterday" },
  { text: "ICAO Listening: Mumbai ACC accent module", time: "2 days ago" },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Welcome back, Capt. Fernandez</h1>
        <p className="text-[var(--color-navy-400)]">Continue your aviation English training</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Flame, label: "Day Streak", value: "12", color: "text-[var(--color-amber-accent)]" },
          { icon: Clock, label: "This Week", value: "5.2h", color: "text-[var(--color-navy-400)]" },
          { icon: Target, label: "ICAO Target", value: "Level 5", color: "text-[var(--color-sky-accent)]" },
          { icon: CheckCircle2, label: "Completed", value: "63", color: "text-[var(--color-green-accent)]" },
        ].map((s) => (
          <div key={s.label} className="bg-[var(--color-navy-900)] p-5 rounded-xl border border-[var(--color-navy-800)]">
            <s.icon className={`w-5 h-5 ${s.color} mb-2`} />
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-[var(--color-navy-500)]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Skills grid */}
      <h2 className="text-lg font-semibold text-white mb-4">Your Skills</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {skills.map((skill) => (
          <Link key={skill.name} href={skill.href} className="bg-[var(--color-navy-900)] p-6 rounded-xl border border-[var(--color-navy-800)] hover:border-[var(--color-navy-700)] transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-navy-800)] flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-[var(--color-sky-accent)]" />
                </div>
                <span className="font-medium text-white">{skill.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--color-navy-600)] group-hover:text-[var(--color-sky-accent)] transition-colors" />
            </div>
            <div className="w-full bg-[var(--color-navy-800)] rounded-full h-2">
              <div className="bg-[var(--color-sky-accent)] h-2 rounded-full transition-all" style={{ width: `${skill.progress}%` }} />
            </div>
            <div className="text-xs text-[var(--color-navy-500)] mt-2">{skill.progress}% complete</div>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Tasks */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Today&apos;s Tasks</h2>
          <div className="bg-[var(--color-navy-900)] rounded-xl border border-[var(--color-navy-800)] divide-y divide-[var(--color-navy-800)]">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-start gap-3 p-4">
                {task.done ? (
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-green-accent)] shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-[var(--color-navy-600)] shrink-0 mt-0.5" />
                )}
                <span className={`text-sm ${task.done ? "text-[var(--color-navy-600)] line-through" : "text-[var(--color-navy-200)]"}`}>
                  {task.title}
                  {task.priority && !task.done && <span className="ml-2 text-xs bg-[var(--color-navy-800)] text-[var(--color-sky-accent)] px-2 py-0.5 rounded-full">Priority</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="bg-[var(--color-navy-900)] rounded-xl border border-[var(--color-navy-800)] divide-y divide-[var(--color-navy-800)]">
            {recentActivity.map((a) => (
              <div key={a.text} className="p-4">
                <p className="text-sm text-[var(--color-navy-200)]">{a.text}</p>
                <p className="text-xs text-[var(--color-navy-500)] mt-1">{a.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
