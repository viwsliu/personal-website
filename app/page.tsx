"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "about", "work", "education", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0 relative"
        >
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full">
            <img
              src="/background1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full relative z-10">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                {/* <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div> */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Vincent
                  <br />
                  <span className="text-muted-foreground">Liu</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-foreground"> Software Developer</span> with experience in
                  <span className="text-foreground"> Full-Stack Web Development </span>
                  {/* <span className="text-foreground"> technology</span>, */}
                  and
                  <span className="text-foreground"> Machine Learning</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work | San Francisco, United States
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="flex justify-start">
                <div className="relative">
                  <img
                    src="/prof_pic.jpg"
                    alt="Vincent Liu"
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-2 border-border shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TypeScript", "C/C++", "React", "HTML/CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="about"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">About Me</h2>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    I'm an aspiring Software Developer that loves building web applications and constantly exploring new tools, frameworks, and ideas to sharpen my skills.
                    
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    My journey began with a curiosity for how things work—on the web, in hardware, and beyond —
                    which evolved into a never-ending thirst for knowledge and growth.
                    I strive to apply what I learn in practical, impactful ways, from building digital tools to exploring emerging technologies that shape the future.
                    I’m driven to be part of building what comes next.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new hobbies, meeting new people, learning new technologies, or finding ways to merge creativity with problem-solving.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">CORE SKILLS</div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Full-stack development",
                      "Backend Development",
                      "End-to-end Engineering",
                      "UI/UX Design",
                      "Team Leadership",
                      "Collaboration & Communication",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">PHILOSOPHY</div>
                  <blockquote className="border-l-2 border-border pl-6 space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed">
                      "Don't go on discussing what a good person should be. Just be one."
                    </p>
                  </blockquote>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">INTERESTS</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cybersecurity & Encryption",
                      "Machine Learning",
                      "Cloud Infrastructure",
                      "Aviation",
                      "Defense Tech",
                      "Travel & Photography",
                    ].map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">Awards and Certificates</div>
                  <div className="space-y-3">
                    {[
                      "Practical Introduction to Quantum-Safe Cryptography <br/> — Issued by IBM, Feb 2025",
                      "Information Systems Design and Management <br/> — Issued by Information Technology Academy, Jun 2021",
                      "State Seal of Biliteracy (Japanese) <br/> — Issued by State of California, Jun 2021",
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span
                          className="text-sm text-muted-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: achievement }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "Jan - May 2025",
                  role: "Software Engineer Intern",
                  company: "UXLy",
                  description: "Assisted in the developement of a Multi-tool Customer Support Chatbot",
                  tech: ["Python", "React", "TypeScript",],
                },
                {
                  year: "Jan - Mar, 2025",
                  role: "Reader",
                  company: "UC Santa Cruz, Baskin School of Engineering",
                  description: "Evaluated and provided feedback on student understanding of Agile workflow and core software engineering principles",
                  tech: [],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Education</h2>
              <div className="text-sm text-muted-foreground font-mono">2017 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "June, 2025",
                  degree: "Bachelor of Science in Computer Science",
                  school: "University of California, Santa Cruz",
                  description: "Specialized in Software Engineering and Web Development",
                  focus: ["Full-Stack Web Development", "Data Structures & Algorithms", "Cryptography", "Computer Architecture"],
                },
                {
                  year: "June, 2021",
                  degree: "High School Diploma",
                  school: "El Cerrito High School",
                  description: "Attended the Information Technology Academy, focused on Python and HTML/CSS Web Design",
                  focus: [],
                },
              ].map((education, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {education.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{education.degree}</h3>
                      <div className="text-muted-foreground">{education.school}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{education.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {education.focus.map((subject) => (
                      <span
                        key={subject}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Highlighted Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "UXly Multi-Tool Customer Chatbot",
                  description:
                    "A multi-tool customer support chatbot made to handle product inquiries, order placement & tracking, and session-based assistance.",
                  tech: ["Python", "React", "TypeScript", "JavaScript"],
                  github: "https://github.com/UXLY-Chatbot",
                  image: "/UXly_chatbot_logo.png",
                },
                {
                  title: "SecureAI",
                  description:
                    "A Full-stack tool that automates security audits on public GitHub repositories",
                  tech: ["Python", "TypeScript", "React"],
                  github: "https://github.com/viwsliu/SecureAI",
                  image: "/SecureAI.png",
                },
                {
                  title: "Cognoso",
                  description:
                    "A Flashcard management tool with PDF extraction, auto-generation, and chatbot that answers questions from uploaded study material.",
                  tech: ["Python", "TypeScript", "React", "Rust", "CSS"],
                  github: "https://github.com/andychenbruce/COGNOSO",
                  image: "/cognoso_logo.png",
                },
                {
                  title: "NoteSheet Editor",
                  description:
                    "A Full-stack tool that generates notesheets for students, using a backend algorithm inspired by the 2D knapsack problem to optimize whitespace and layout efficiency for PDF generation.",
                  tech: ["Python", "Javascript", "HTML", "CSS"],
                  github: "https://github.com/sopwithcamel110/NED",
                  image: "/Notesheet_Ed.png",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Link
                        href={project.github}
                        className="flex-shrink-0 p-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg
                          className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </Link>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[5] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect!</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new opportunities, collaborations, and conversations about technology.
                </p>

                <div className="space-y-4">
                  <Link
                    href="vincent.w.sheng.liu@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">vincent.w.sheng.liu@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="text-sm text-muted-foreground font-mono">Connect here too!</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "GitHub", handle: "@viwsliu", url: "https://github.com/viwsliu" },
                    { name: "Instagram", handle: "@_vince.png", url: "https://www.instagram.com/_vince.png/" },
                    { name: "LinkedIn", handle: "@vincent-liu003", url: "https://www.linkedin.com/in/vincent-liu003/" },
                    { name: "My Resume", handle: "Click to view!", url: "Vincent Liu - Resume.pdf" },
                  ].map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">SEND A MESSAGE!</div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-muted-foreground/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-muted-foreground/50 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-muted-foreground/50 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-6 py-3 bg-foreground text-background rounded-lg hover:bg-muted-foreground transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Vincent Liu</div>
            </div>

            
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
