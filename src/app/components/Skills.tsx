import {
  Cloud,
  Box,
  Boxes,
  GitBranch,
  FileCode,
  Terminal,
  Activity,
  Database,
  Server,
  Code,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platform',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      skills: ['AWS'],
    },
    {
      title: 'Containers',
      icon: Box,
      color: 'from-blue-500 to-blue-600',
      skills: ['Docker', 'Kubernetes'],
    },
    {
      title: 'CI/CD',
      icon: GitBranch,
      color: 'from-green-500 to-green-600',
      skills: ['Jenkins', 'GitHub Actions'],
    },
    {
      title: 'Infrastructure',
      icon: Server,
      color: 'from-purple-500 to-purple-600',
      skills: ['Terraform'],
    },
    {
      title: 'Operating Systems',
      icon: Terminal,
      color: 'from-gray-600 to-gray-700',
      skills: ['Linux', 'Ubuntu'],
    },
    {
      title: 'Monitoring',
      icon: Activity,
      color: 'from-red-500 to-red-600',
      skills: ['Prometheus', 'Grafana'],
    },
    {
      title: 'Version Control',
      icon: FileCode,
      color: 'from-indigo-500 to-indigo-600',
      skills: ['Git', 'GitHub'],
    },
    {
      title: 'Scripting',
      icon: Code,
      color: 'from-teal-500 to-teal-600',
      skills: ['Shell Scripting', 'Python'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Technical Skills
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevOps Toolkit
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build and manage scalable infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>

                {/* Skills */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg text-sm text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
