import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating solutions that bridge the gap between
            complex problems and elegant code. With a strong foundation in computer science and hands-on experience in
            software development, I thrive in dynamic environments where I can contribute to impactful projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="gradient-card border-border/50 glow-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Location</span>
                </div>
                <p className="text-muted-foreground">Nairobi, Kenya</p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 glow-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Education</span>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Bachelor of Applied Science (BASc), Computer Science</p>
                  <p className="text-muted-foreground">Karatina University • Expected 2026</p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 glow-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Experience</span>
                </div>
                <p className="text-muted-foreground">
                  1+ years in software development with focus on remote and physical collaboration and enterprise solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated Computer Science student at Karatina University with over a year of hands-on experience in
                software development. Skilled in PHP, Laravel, MySQL, Python, Django and React, I've successfully contributed to
                enterprise-level projects. My academic journey has equipped me with a solid foundation
                in algorithms, data structures and software engineering principles. I thrive in dynamic work environments,
                demonstrating strong communication and collaboration skills.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Proficient in  collaboration using Git, Microsoft 365 and communication tools, ensuring seamless
                project delivery in distributed teams. Passionate about leveraging AI and machine learning to create
                impactful solutions. Committed to continuous learning and professional growth in the ever-evolving tech landscape.
                These experiences have honed my ability to adapt and excel in fast-paced environments.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Current Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Ethical Hacker - Cisco</Badge>
                <Badge variant="secondary">CCNA: Switching, Routing, and Wireless</Badge>
                <Badge variant="secondary">CCNA: Introduction to Networks</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
