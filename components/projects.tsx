import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Brain, Shield, Globe, Database, Smartphone, ShoppingBag, Car, Workflow } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Shoes E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with Laravel backend, React frontend, and integrated payment processing.",
      icon: ShoppingBag,
      technologies: ["Laravel", "Blade", "MySQL", "PHP", "Bootstrap"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout system",
        "Booking via Whatsapp",
      ],
      status: "Completed",
      category: "Full-Stack",
      github: "https://github.com/tedd-spec/Mwiti_kicks",
      demo: "#",
    },
   
    {
      title: "Safi-Ride-Detailing",
      description:
        "Web application for booking car detailing services. Features service selection, scheduling, and payment integration.",
      icon: Car,
      technologies: ["TypeScript","HTML", "CSS", "Javascript", "Bootstrap"],
      features: [
        "Service selection and customization",
        "Real-time booking and scheduling",
        "Responsive design for mobile and desktop",
        "SMS notifications for bookings",

      ],
      status: "Completed",
      category: "Frontend",
      github: "https://github.com/tedd-spec/mwiti-detailing-site",
      demo: "https://safi-ride-detailing.netlify.app/",
    },
    {
      title: "Tours and Travels Website",
      description:
        "Responsive travel agency website with booking system, destination showcase, and user reviews.",
      icon: Globe,
      technologies: ["TypeScript", "Javascript", "CSS",],
      features: [
        "Interactive destination gallery",
        "Booking and reservation system",
        "user reviews and ratings",
      
      ],
      status: "Completed",
      category: "Frontend",
      github: "https://github.com/tedd-spec/Tours-and-travel-website",
      demo: "#",
    },
    {
      title: " My Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing development skills with TypeScript and Tailwind CSS.",
      icon: Code,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      features: [
        "Responsive design with mobile-first approach",
        "Interactive animations and transitions",
        "SEO optimized with meta tags",
        "Performance optimized with lazy loading",
      ],
      status: "Completed",
      category: "Frontend",
      github: "https://github.com/tedd-spec/portfolio-website",
      demo: "#",
    },
    {
      title: "Recruitment portal",
      description:
        "A recruitment portal that streamlines job postings, applications, and candidate management for HR teams.",
      icon: Workflow,
      technologies: ["Laravel", "Bootstrap", "MySQL", "Blade", "PHP"],
      features: [
        "Job posting and management",
        "Application tracking system",
        "Candidate profile management",
        "Search and filter candidates",
      ],
      status: "In Development",
      category: "Full-Stack",
      github: "https://github.com/tedd-spec/recruitment-portal",
      demo: "#",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "In Development":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, highlighting my skills in full-stack development, frontend design, and
            problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 glow-secondary hover:glow-primary transition-all duration-300 group h-full flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className={`${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs px-2 py-1">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent text-xs" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent text-xs" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/tedd-spec" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
