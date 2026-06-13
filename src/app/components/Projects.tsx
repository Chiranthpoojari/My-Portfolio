import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'VTU Result Automation System',
      description:
        'Automated result fetching system for VTU students using Python and web scraping. Implemented CI/CD pipeline for automatic deployment.',
      image:
        'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBncmFkaWVudHxlbnwxfHx8fDE3ODEzNTkyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Automation', 'CI/CD'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AWS Static Website Hosting',
      description:
        'Deployed a static website on AWS S3 with CloudFront CDN, Route 53 DNS, and SSL certificate for secure HTTPS access.',
      image:
        'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc4MTM1OTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AWS', 'S3', 'CloudFront', 'Route53'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'CI/CD Pipeline with Jenkins',
      description:
        'Built automated CI/CD pipeline using Jenkins for containerized applications with Docker and deployed to AWS EC2 instances.',
      image:
        'https://images.unsplash.com/photo-1605745341112-85968b19335b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3ODEzNTkyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Jenkins', 'Docker', 'AWS EC2', 'Git'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description:
        'Deployed Prometheus and Grafana on Kubernetes cluster for comprehensive monitoring and alerting of containerized applications.',
      image:
        'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBncmFkaWVudHxlbnwxfHx8fDE3ODEzNTkyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Kubernetes', 'Prometheus', 'Grafana', 'Monitoring'],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Portfolio
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Real-world DevOps projects showcasing my skills in cloud, automation, and
            infrastructure
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-gray-200 hover:border-gray-300 bg-white/50 backdrop-blur-sm rounded-xl"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    className={`flex-1 bg-gradient-to-r ${project.gradient} text-white shadow-lg rounded-xl`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
