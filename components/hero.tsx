"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer | AI/ML Enthusiast"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-chart-2/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Badge variant="outline" className="mb-4 glow-primary">
            Available for Remote Work
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block text-foreground">Teddy Mwiti</span>
          <span className="block gradient-primary bg-clip-text text-transparent animate-glow">Mwenda</span>
        </h1>

        <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-8">
          <span className="font-mono">{text}</span>
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Building the future with full-stack development, AI/ML solutions, and ethical hacking expertise. Passionate
          about creating innovative web applications that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="glow-primary animate-glow" asChild>
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/Teddy_Mwiti_Mwenda_CV.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/tedd-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/teddy-mwiti-b32249371"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:gethappywithted@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
