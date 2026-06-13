import { Cloud, Database, Server, Box, Globe, Shield, HardDrive } from 'lucide-react';

export function AWSArchitecture() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Cloud Architecture
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            AWS Cloud{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Scalable and secure cloud architecture design
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/40 shadow-2xl shadow-blue-500/10">
          <div className="relative">
            {/* Flow Lines Background */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 0 }}
              viewBox="0 0 800 600"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Connection lines */}
              <path
                d="M 400 80 L 400 150"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 400 250 L 200 350"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 400 250 L 600 350"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 200 450 L 200 520"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 600 450 L 600 520"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Components */}
            <div className="relative z-10 grid grid-cols-3 gap-8">
              {/* Row 1 - Entry Point */}
              <div className="col-span-3 flex justify-center">
                <ArchNode
                  icon={Globe}
                  title="Route 53"
                  subtitle="DNS Service"
                  color="from-orange-500 to-orange-600"
                />
              </div>

              {/* Row 2 - CDN */}
              <div className="col-span-3 flex justify-center">
                <ArchNode
                  icon={Cloud}
                  title="CloudFront"
                  subtitle="CDN"
                  color="from-blue-500 to-blue-600"
                />
              </div>

              {/* Row 3 - Load Balancer & Compute */}
              <div className="flex justify-center">
                <ArchNode
                  icon={Shield}
                  title="Load Balancer"
                  subtitle="ALB"
                  color="from-purple-500 to-purple-600"
                />
              </div>
              <div className="flex justify-center">
                <ArchNode
                  icon={Server}
                  title="EC2 Instances"
                  subtitle="Compute"
                  color="from-green-500 to-green-600"
                />
              </div>
              <div className="flex justify-center">
                <ArchNode
                  icon={Box}
                  title="EKS Cluster"
                  subtitle="Kubernetes"
                  color="from-blue-500 to-cyan-500"
                />
              </div>

              {/* Row 4 - Storage & Database */}
              <div className="flex justify-center">
                <ArchNode
                  icon={HardDrive}
                  title="S3 Bucket"
                  subtitle="Object Storage"
                  color="from-red-500 to-orange-500"
                />
              </div>
              <div className="col-span-2 flex justify-center">
                <ArchNode
                  icon={Database}
                  title="RDS"
                  subtitle="Database"
                  color="from-indigo-500 to-purple-600"
                />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Network Layer', color: 'bg-orange-500' },
                { label: 'Content Delivery', color: 'bg-blue-500' },
                { label: 'Compute Layer', color: 'bg-green-500' },
                { label: 'Data Layer', color: 'bg-indigo-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchNode({
  icon: Icon,
  title,
  subtitle,
  color,
}: {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl mb-3 group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-10 h-10 text-white" />
      </div>
      <div className="text-center">
        <div className="font-semibold text-gray-900 text-sm">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
