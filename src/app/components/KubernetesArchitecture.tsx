import {
  Box,
  Boxes,
  Database,
  Activity,
  BarChart3,
  Network,
  Server,
  Globe,
} from 'lucide-react';

export function KubernetesArchitecture() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Container Orchestration
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Kubernetes{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cluster Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Scalable microservices deployment with monitoring and observability
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/40 shadow-2xl shadow-blue-500/10">
          <div className="relative">
            {/* Flow Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 0 }}
              viewBox="0 0 900 700"
            >
              <defs>
                <linearGradient id="k8sLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 450 80 L 450 180"
                stroke="url(#k8sLineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 450 250 L 300 350"
                stroke="url(#k8sLineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 450 250 L 600 350"
                stroke="url(#k8sLineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 300 450 L 450 520"
                stroke="url(#k8sLineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 600 450 L 450 520"
                stroke="url(#k8sLineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>

            <div className="relative z-10 space-y-12">
              {/* Ingress Layer */}
              <div className="flex justify-center">
                <K8sNode
                  icon={Globe}
                  title="Ingress Controller"
                  subtitle="Traffic Routing"
                  color="from-orange-500 to-red-500"
                  large
                />
              </div>

              {/* Services Layer */}
              <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="flex justify-center">
                  <K8sNode
                    icon={Server}
                    title="Frontend Service"
                    subtitle="ClusterIP"
                    color="from-blue-500 to-cyan-500"
                  />
                </div>
                <div className="flex justify-center">
                  <K8sNode
                    icon={Network}
                    title="Backend API Service"
                    subtitle="ClusterIP"
                    color="from-purple-500 to-pink-500"
                  />
                </div>
              </div>

              {/* Pods & Deployments */}
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      Frontend Pods
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <PodCard icon={Box} label="Pod 1" color="from-blue-400 to-blue-500" />
                    <PodCard icon={Box} label="Pod 2" color="from-blue-400 to-blue-500" />
                    <PodCard icon={Box} label="Pod 3" color="from-blue-400 to-blue-500" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      Backend Pods
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <PodCard
                      icon={Box}
                      label="Pod 1"
                      color="from-purple-400 to-purple-500"
                    />
                    <PodCard
                      icon={Box}
                      label="Pod 2"
                      color="from-purple-400 to-purple-500"
                    />
                    <PodCard
                      icon={Box}
                      label="Pod 3"
                      color="from-purple-400 to-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-3">
                      Monitoring
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <PodCard
                      icon={Activity}
                      label="Prometheus"
                      color="from-red-400 to-red-500"
                    />
                    <PodCard
                      icon={BarChart3}
                      label="Grafana"
                      color="from-orange-400 to-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Database Layer */}
              <div className="flex justify-center">
                <K8sNode
                  icon={Database}
                  title="Database Service"
                  subtitle="StatefulSet"
                  color="from-green-500 to-emerald-600"
                  large
                />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Ingress Layer', color: 'bg-orange-500' },
                { label: 'Service Layer', color: 'bg-blue-500' },
                { label: 'Application Pods', color: 'bg-purple-500' },
                { label: 'Data Layer', color: 'bg-green-500' },
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

function K8sNode({
  icon: Icon,
  title,
  subtitle,
  color,
  large = false,
}: {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
  large?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${
          large ? 'w-24 h-24' : 'w-20 h-20'
        } rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl mb-3`}
      >
        <Icon className={`${large ? 'w-12 h-12' : 'w-10 h-10'} text-white`} />
      </div>
      <div className="text-center">
        <div className="font-semibold text-gray-900 text-sm">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}

function PodCard({
  icon: Icon,
  label,
  color,
}: {
  icon: any;
  label: string;
  color: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-xl p-3 flex items-center gap-2 shadow-lg`}
    >
      <Icon className="w-4 h-4 text-white" />
      <span className="text-xs font-medium text-white">{label}</span>
    </div>
  );
}
