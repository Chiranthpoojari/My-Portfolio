import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/40 shadow-2xl shadow-blue-500/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc4MTM1OTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cloud Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl opacity-20 blur-2xl"></div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  About Me
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2"></div>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Passionate About Building{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Scalable Infrastructure
                </span>
              </h2>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a Computer Science Engineering student with a strong focus on{' '}
                  <span className="font-semibold text-gray-900">DevOps</span> and{' '}
                  <span className="font-semibold text-gray-900">Cloud Computing</span>.
                  My journey in technology is driven by a passion for automation,
                  infrastructure optimization, and creating reliable systems.
                </p>

                <p>
                  My expertise spans across{' '}
                  <span className="font-semibold text-gray-900">
                    Infrastructure Automation
                  </span>
                  ,{' '}
                  <span className="font-semibold text-gray-900">
                    Linux Administration
                  </span>
                  ,{' '}
                  <span className="font-semibold text-gray-900">Kubernetes</span>,{' '}
                  <span className="font-semibold text-gray-900">AWS</span>,{' '}
                  <span className="font-semibold text-gray-900">Terraform</span>,{' '}
                  <span className="font-semibold text-gray-900">Jenkins</span>,{' '}
                  <span className="font-semibold text-gray-900">Docker</span>, and{' '}
                  <span className="font-semibold text-gray-900">Monitoring Tools</span>.
                </p>

                <p>
                  I'm dedicated to continuous learning and staying updated with the
                  latest technologies in{' '}
                  <span className="font-semibold text-gray-900">
                    Site Reliability Engineering
                  </span>{' '}
                  and cloud-native architectures.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: '2026', label: 'Graduating' },
                  { value: '10+', label: 'Projects' },
                  { value: '5+', label: 'Certifications' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
