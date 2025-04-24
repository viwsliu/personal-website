"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react"
import { MouseTracker } from "@/components/mouse-tracker"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
    }
  }, [])
  
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Email copied to clipboard")
  }).catch(err => {
    console.error("Failed to copy email: ", err)
  })
}
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
              <Button variant="ghost" size="icon" onClick={() => copyToClipboard("vtliului@gmail.com")}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Copy Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8 bg-[url('/background1.jpg')] bg-cover bg-center bg-no-repeat" >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4 bg-black bg-opacity-50 p-6 rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-white">Hi, I'm Vincent Liu!</span>
              </h1>
              <p className="text-xl text-gray-400">
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
                <img src="/prof_pic.jpg?height=256&width=256" alt="Profile" className="object-cover w-full h-full" />
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
                I'm an aspiring Software Developer with expertise in modern web technologies. 
                I love building web applications and constantly exploring new tools, frameworks, and ideas to sharpen my skills.
                With a background in Computer Science and strong skills in problem-solving, communication, and collaboration, 
                I bring a unique perspective to every project. 
              </p>  
              <p className="text-lg text-muted-foreground">
                Some of my other interests include cryptography, aviation, and history.
                Rather than just observing how technology evolves, I’m driven to be part of building what comes next. 
              </p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Programming Languages</h3>
                  <p className="text-sm text-muted-foreground">
                    Python, C++, C, JavaScript, TypeScript, SQL, Assembly, Haskell
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Frameworks & Libraries</h3>
                  <p className="text-sm text-muted-foreground">
                    React, Flask, Node.js, Express.js, WebGL, Material UI, Tailwind CSS, LiteLLM (LangChain, LangGraph), ReportLab
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Tools & Platforms</h3>
                  <p className="text-sm text-muted-foreground">
                    Git, Docker, RESTful APIs, Nginx, Linux, VS Code,
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-medium">Concepts & Methodologies</h3>
                  <p className="text-sm text-muted-foreground">
                    Object-Oriented Programming, Agile, Scrum, Test-Driven Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">My Project Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Cognoso</CardTitle>
                <CardDescription>A web application built with React and Node.js</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                <img
                  src="/cognoso_logo.png"
                  alt="P1 Screenshot"
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                </div>
                <p className="text-sm text-muted-foreground">
                A full-stack web app that lets users upload PDFs (e.g., textbooks) to automatically generate flashcards for studying.
                Features include user authentication, responsive design, AI-driven flashcard generation, and a chatbot that uses a Retrieval-Augmented Generation (RAG) model to answer questions based solely on the user's uploaded content
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/andychenbruce/COGNOSO" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {/* <Button size="sm" asChild>
                  <Link href="https://project-one-demo.example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button> */}
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>UXly Multi-Tool Customer Support Chatbot</CardTitle>
                <CardDescription>A Customer Service Chatbot Plugin for WooCommerce (WordPress) sites</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                  <img
                    src="/UXly_chbot_logo.png"
                    alt="P2 Screenshot"
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  A customer service chatbot designed to handle product inquiries and order-related tasks using LangChain, LangGraph, LiteLLM, and Aporia GuardRails.
                  The Chatbot is designed to be integrated with Woocommerce (Wordpress) e-commerce sites with large product catalogs.
                  Features include User intent detection, Management of dialogue context, Product recommendation, Product Lookup, Order Lookup, and Order Placement.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/UXLY-Chatbot" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {/* <Button size="sm" asChild>
                  <Link href="https://project-two-demo.example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo (Private Repo)
                  </Link>
                </Button> */}
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>NoteSheet Editor</CardTitle>
                <CardDescription>NoteSheet / Cheatsheet editor Tool for students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                  <img
                    src="/Notesheet_Ed.png?height=200&width=400"
                    alt="P3 Screenshot"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  A progressive web app that works offline and provides a native-like experience on mobile devices.
                  Features include a 2D knapsack algorithm for efficiently fitting the maximum amount of information within a user-defined page limit, 
                  a clean and user-friendly UI designed for students, 
                  an in-place rich text editor (with support for bullet points, numbered lists, etc.), 
                  automated text resizing, 
                  and image support (PNG, JPG) with both automatic and manual resizing options.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/sopwithcamel110/NED" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {/* <Button size="sm" asChild>
                  <Link href="https://vincentl03.github.io/CSE160-Live/Assignment_5c/asg5c.html" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button> */}
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="https://github.com/viwsliu" target="_blank" rel="noopener noreferrer">
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
                  <Link href="/Vincent_Liu_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
              I'm open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300">
                <Mail className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">vtliului@gmail.com</p>
              </div>
              <div className="p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300">
                <Github className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/viwsliu</p>
              </div>
              <div className="p-6 bg-muted rounded-lg hover:shadow-md transition-all duration-300">
                <Linkedin className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/vincent-liu003/</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vincent WS Liu
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="https://github.com/viwsliu" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/vincent-liu003/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:vtliului@gmail.com">
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

