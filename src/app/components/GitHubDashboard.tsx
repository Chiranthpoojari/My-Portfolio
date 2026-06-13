import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GitBranch, Star, Code, TrendingUp } from 'lucide-react';

export function GitHubDashboard() {
  // Mock data
  const contributionData = [
    { month: 'Jan', commits: 45 },
    { month: 'Feb', commits: 62 },
    { month: 'Mar', commits: 78 },
    { month: 'Apr', commits: 95 },
    { month: 'May', commits: 112 },
    { month: 'Jun', commits: 89 },
  ];

  const languageData = [
    { name: 'Python', value: 35 },
    { name: 'Shell', value: 28 },
    { name: 'YAML', value: 20 },
    { name: 'HCL', value: 12 },
    { name: 'Other', value: 5 },
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              GitHub Activity
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Development{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: GitBranch,
              label: 'Total Commits',
              value: '481',
              color: 'from-blue-500 to-blue-600',
            },
            {
              icon: Code,
              label: 'Repositories',
              value: '24',
              color: 'from-purple-500 to-purple-600',
            },
            {
              icon: Star,
              label: 'Stars Earned',
              value: '47',
              color: 'from-yellow-500 to-yellow-600',
            },
            {
              icon: TrendingUp,
              label: 'Current Streak',
              value: '12 days',
              color: 'from-green-500 to-green-600',
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg shadow-black/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contribution Chart */}
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-lg shadow-black/5">
            <h3 className="font-semibold text-gray-900 mb-6">
              Contribution Activity
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={contributionData}>
                <defs>
                  <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="commits"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorCommits)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Language Distribution */}
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-lg shadow-black/5">
            <h3 className="font-semibold text-gray-900 mb-6">
              Language Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={languageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* GitHub Streak */}
        <div className="mt-6 bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-lg shadow-black/5">
          <h3 className="font-semibold text-gray-900 mb-6">Contribution Streak</h3>
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const intensity = Math.random();
                  const bgColor =
                    intensity > 0.7
                      ? 'bg-green-600'
                      : intensity > 0.5
                      ? 'bg-green-500'
                      : intensity > 0.3
                      ? 'bg-green-400'
                      : intensity > 0.1
                      ? 'bg-green-300'
                      : 'bg-gray-200';
                  return (
                    <div
                      key={dayIndex}
                      className={`w-3 h-3 rounded-sm ${bgColor}`}
                      title={`Day ${weekIndex * 7 + dayIndex + 1}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
              <div className="w-3 h-3 rounded-sm bg-green-300"></div>
              <div className="w-3 h-3 rounded-sm bg-green-400"></div>
              <div className="w-3 h-3 rounded-sm bg-green-500"></div>
              <div className="w-3 h-3 rounded-sm bg-green-600"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
