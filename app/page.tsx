"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react"
import { MouseTracker } from "@/components/mouse-tracker"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect } from "react"

export default function Home() {
  // Initialize dark mode based on system preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <MouseTracker />

      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Vincent Liu</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#resume" className="text-muted-foreground hover:text-foreground transition-colors">
              Resume
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="https://github.com/viwsliu" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/vincent-liu003" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="vtliului@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Vincent Liu!</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Software Developer experienced in Full Stack Web Development.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View my work</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <img src="/placeholder.svg?height=256&width=256" alt="Profile" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16 dark:bg-muted/10">
          <div className="container space-y-6">
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                I'm a passionate software developer with expertise in modern web technologies. I enjoy building
                responsive, user-friendly applications that solve real-world problems. With a background in [your
                background], I bring a unique perspective to every project.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Languages</h3>
                  <p className="text-sm text-muted-foreground">Python, C++, C, Typescript, PostGreSQL, CSS, HTML5, Assembly</p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Frameworks and Libraries</h3>
                  <p className="text-sm text-muted-foreground">React, Flask, Node.js, Express, MaterialUI, Tailwind, Langchain</p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Technologies and Concepts</h3>
                  <p className="text-sm text-muted-foreground">RESTAPIs, Object Ordiented Programming, Agile, Scrum</p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Tools & Environments</h3>
                  <p className="text-sm text-muted-foreground">Git, Linux, VS Code, Docker, NginX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Project One</CardTitle>
                <CardDescription>A web application built with React and Node.js</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project One Screenshot"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  This project is a full-stack application that allows users to manage their tasks efficiently. It
                  features user authentication, real-time updates, and a responsive design.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/yourusername/project-one" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="https://project-one-demo.example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Multi-Tool Customer Support Chatbot</CardTitle>
                <CardDescription>An e-commerce platform with payment integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project Two Screenshot"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  A complete e-commerce solution with product management, shopping cart, and secure checkout. Built with
                  Next.js, Stripe, and a headless CMS for content management.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/yourusername/project-two" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="https://project-two-demo.example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Project Three</CardTitle>
                <CardDescription>Basic Computer Graphics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project Three Screenshot"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  A progressive web app that works offline and provides a native-like experience on mobile devices.
                  Features include push notifications, offline caching, and responsive design.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/yourusername/project-three" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="https://vincentl03.github.io/CSE160-Live/Assignment_5c/asg5c.html" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View more on GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 bg-muted/50 dark:bg-muted/10">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold text-center">Resume</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Web Developer</h4>
                      <span className="text-sm text-muted-foreground">January - June, 2025</span>
                    </div>
                    <h5 className="text-primary mb-2">UXly - Intern</h5>
                    <p className="text-sm text-muted-foreground">
                      Developed a multi-tool customer support chatbot for WooCommerce-based e-commerce sites, 
                      enabling users to add items to cart, check out, look up products, and track orders through natural language. 
                      Designed to integrate with long-form product catalogs (e.g., PDFs), enhancing user experience and reducing support overhead.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Reader</h4>
                      <span className="text-sm text-muted-foreground">January - June, 2025</span>
                    </div>
                    <h5 className="text-primary mb-2">Baskin School of Engineering, UC Santa Cruz</h5>
                    <p className="text-sm text-muted-foreground">
                      Graded assignments, projects, and exams for a Software Engineering course, 
                      covering topics such as version control, software design principles, scrum/agile methodologies, 
                      and testing strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Bachelor of Science, Computer Science</h4>
                    <span className="text-sm text-muted-foreground">2021 - 2025</span>
                  </div>
                  <h5 className="text-primary">University of California, Santa Cruz</h5>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">High School Diploma</h4>
                    <span className="text-sm text-muted-foreground">2017 - 2021</span>
                  </div>
                  <h5 className="text-primary">El Cerrito High School</h5>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Full Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
            <p className="text-center text-muted-foreground">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300">
                <Mail className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">your.email@example.com</p>
              </div>
              <div className="p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300">
                <Github className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/yourusername</p>
              </div>
              <div className="p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300">
                <Linkedin className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/yourusername</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

