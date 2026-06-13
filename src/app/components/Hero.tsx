import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Cloud,
  Boxes,
  Activity,
  GitBranch,
  Download,
  ArrowRight,
  Server,
  Database,
  Cpu,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <Badge className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border-blue-200/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                OPEN TO DEVOPS OPPORTUNITIES
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Aspiring DevOps
                <br />
                Engineer
              </h1>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Cloud • Automation • Kubernetes
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Computer Science Engineering student and DevOps trainee passionate about
              cloud infrastructure, automation, CI/CD pipelines, containers, monitoring,
              and scalable systems.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl shadow-blue-500/30 rounded-xl px-8"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 hover:border-gray-300 bg-white/50 backdrop-blur-sm rounded-xl px-8"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[
                { label: 'Fresher', value: '2026' },
                { label: 'Projects', value: '10+' },
                { label: 'AWS Learner', value: 'Cloud' },
                { label: 'K8s Enthusiast', value: 'DevOps' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg shadow-black/5"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Main Portrait */}
            <div className="relative z-10">
              <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border-4 border-white/50 bg-gradient-to-br from-blue-100 to-purple-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHlvdW5nJTIwbWFufGVufDF8fHx8MTc4MTM1OTI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Chiranth Poojari - DevOps Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 z-20">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-blue-500/20 border border-white/40 w-56">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Cloud Platform</div>
                    <div className="font-semibold text-gray-900">AWS Architecture</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-20 -right-6 z-20">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-purple-500/20 border border-white/40 w-56">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Boxes className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Container Orchestration</div>
                    <div className="font-semibold text-gray-900">Kubernetes Cluster</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 z-20">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-green-500/20 border border-white/40 w-56">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Version Control</div>
                    <div className="font-semibold text-gray-900">GitHub Activity</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 -right-6 z-20">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl shadow-indigo-500/20 border border-white/40 w-56">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Automation</div>
                    <div className="font-semibold text-gray-900">CI/CD Pipeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
