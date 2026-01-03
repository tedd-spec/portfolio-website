import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Development Internship",
      company: "Iansoft Technologies",
      location: "Nairobi, Kenya",
      period: "May 2025 – Aug 2025",
      description:
        "Collaborated(On site) on software development projects using PHP, Laravel, MySQL and delivering features on time for enterprise clients.",
      achievements: [
        "Supported Microsoft 365 Business Central integration, streamlining business processes for  enterprise operations",
        "Contributed to system monitoring in physical environments, optimizing performance for distributed systems",
        "Developed and tested responsive web applications, ensuring high-quality user experiences across devices",
      ],
      technologies: ["Laravel", "MySQL", "PHP", "Microsoft 365","Business Central","Git"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Applied Science (BASc), Computer Science",
      institution: "Karatina University",
      location: "Nyeri, Kenya",
      period: "Aug 2022 – Apr 2026 (Expected)",
      status: "In Progress",
    },
    /*{
      degree: "Kenya Certificate of Secondary Education",
      institution: "Ikuu Boys High School",
      location: "Kenya",
      period: "Jan 2018 – Apr 2022",
      status: "Completed",
    },*/
  ]

  const certifications = [
    {
      name: "Ethical Hacker",
      issuer: "Cisco",
      period: "Dec 2024 – Jan 2025",
      status: "Completed",
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      period: "Sep 2023 – Nov 2023",
      status: "Completed",
    },
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      period: "June 2023 – August 2023",
      status: "Completed",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in technology, from academic foundations to professional experience and continuous learning.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card border-border/50 glow-secondary">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <Badge variant={edu.status === "In Progress" ? "default" : "secondary"}>{edu.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 glow-secondary hover:glow-primary transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                  <Badge variant="default" className="mt-3">
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
