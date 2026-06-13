import { GraduationCap, Code, Cloud, Boxes, Briefcase } from 'lucide-react';

export function Timeline() {
  const events = [
    {
      year: '2023',
      title: 'Started Computer Science Engineering',
      description: 'Began my journey in Computer Science with focus on software development and cloud technologies.',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
    },
    {
      year: '2024',
      title: 'Linux and Git Learning',
      description: 'Deep dive into Linux system administration and version control with Git and GitHub.',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
    },
    {
      year: '2025',
      title: 'AWS and DevOps Training',
      description: 'Completed extensive training in AWS Cloud services, CI/CD pipelines, and DevOps practices.',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
    },
    {
      year: '2026',
      title: 'Kubernetes, Terraform, CI/CD Projects',
      description: 'Built real-world projects using Kubernetes, Terraform for infrastructure as code, and advanced CI/CD pipelines.',
      icon: Boxes,
      color: 'from-green-500 to-green-600',
    },
    {
      year: 'Current',
      title: 'Seeking DevOps Engineer Opportunities',
      description: 'Ready to contribute to innovative teams and build scalable, reliable infrastructure solutions.',
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              My Journey
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Learning{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            My path from student to DevOps engineer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 opacity-20"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                      <div className={`inline-block ${isLeft ? '' : ''}`}>
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white text-sm font-semibold mb-3`}
                        >
                          {event.year}
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Empty space on other side */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
