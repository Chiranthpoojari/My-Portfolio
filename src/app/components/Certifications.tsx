import { Award, CheckCircle2 } from 'lucide-react';
import { Badge } from './ui/badge';

export function Certifications() {
  const certs = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      color: 'from-orange-500 to-orange-600',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture'],
    },
    {
      title: 'Linux Administration',
      issuer: 'Linux Foundation',
      date: '2024',
      color: 'from-gray-600 to-gray-700',
      skills: ['System Administration', 'Shell Scripting', 'Server Management'],
    },
    {
      title: 'DevOps Fundamentals',
      issuer: 'DevOps Institute',
      date: '2025',
      color: 'from-blue-500 to-blue-600',
      skills: ['CI/CD', 'Automation', 'Infrastructure as Code'],
    },
    {
      title: 'Kubernetes Fundamentals',
      issuer: 'Cloud Native Computing Foundation',
      date: '2026',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Container Orchestration', 'Microservices', 'K8s Architecture'],
    },
    {
      title: 'Git & GitHub Essentials',
      issuer: 'GitHub',
      date: '2024',
      color: 'from-purple-500 to-purple-600',
      skills: ['Version Control', 'Collaboration', 'Git Workflows'],
    },
  ];

  return (
    <section id="certifications" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Achievements
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Certifications &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Training
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Continuous learning through professional certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-xs font-medium">Verified</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50">
            <p className="text-gray-700 text-lg">
              Continuously expanding my knowledge with new certifications and training
              programs in cloud computing and DevOps technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
