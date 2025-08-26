import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Brain, Shield, Wrench, Router, Laptop } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "C++", level: 75 },
        { name: "React", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "Django", level: 80 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Laptop,
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Predictive Analytics", level: 75 },
        { name: "Intelligent Agents", level: 70 },
        { name: "Data Modeling", level: 75 },
      ],
    },
    {
      title: "Networking & Security",
      icon: Router,
      skills: [
        { name: "Penetration Testing", level: 85 },
        { name: "Vulnerability Assessment", level: 80 },
        { name: "Ethical Hacking", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "Networking", level:90 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90 },
        { name: "SQL/SQLite", level: 85 },
        { name: "Microsoft 365", level: 80 },
        { name: "IIS", level: 90 },
        { name: "Cisco Packet Tracer", level: 85 },
        { name: "SQL Server Management Studio", level: 85 },
        { name: "Virtual Box", level: 80 },
      ],
    },
  ]

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "C++",
    "React",
    "Laravel",
    "Django",
    "Bootstrap",
    "Blade",
    "Git",
    "SQL",
    "IIS",
    "SQL Express",
    "Machine Learning",
    "Penetration Testing",
    "Ethical Hacking",
    "CCNA",
    "Microsoft 365",
    "VirtualBox",
    "Kali Linux",
    "IoT",
    "IPv6",
    "Vulnerability Scanning",
    "IPv4"
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, cybersecurity, and modern development
            practices.
          </p>        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 glow-secondary hover:glow-primary transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
