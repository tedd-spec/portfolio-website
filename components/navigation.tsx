"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Brain, Shield, Mail, FolderOpen, PackageOpen, UserCheck, Award } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About", icon: UserCheck },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#experience", label: "Experience", icon: Award },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/10 w-[90%] max-w-4xl"
          : "bg-background/60 backdrop-blur-md border border-border/30 w-[90%] max-w-4xl"
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent"> </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="rounded-xl">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/30 mt-2">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 block px-4 py-3 rounded-xl text-base font-medium flex items-center gap-3 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
