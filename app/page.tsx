"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import experienceData from "@/data/experience.json"
import educationData from "@/data/education.json"
import projectsData from "@/data/projects.json"
import awardsData from "@/data/awards.json"

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
          {["intro", "about", "work", "education", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: section === "projects" ? "start" : "center" })}
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
          ref={(el) => { sectionsRef.current[0] = el }}
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
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
                  Vincent
                  <br />
                  <span className="text-muted-foreground">Liu</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <span className="text-foreground"> Software Developer</span> with experience in
                  <span className="text-foreground"> Full-Stack Web Development </span>
                  and
                  <span className="text-foreground"> Machine Learning</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
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
                <div className="text-xs text-muted-foreground font-mono">FOCUS</div>
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
          ref={(el) => { sectionsRef.current[1] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-2xl sm:text-3xl font-light">About Me</h2>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
                  <div className="text-xs text-muted-foreground font-mono">CORE SKILLS</div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Full-stack development",
                      "Backend Development",
                      "Team Leadership",
                      "Collaboration & Communication",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  {/* <div className="text-xs text-muted-foreground font-mono">PHILOSOPHY</div> */}
                  <blockquote className="border-l-2 border-border pl-6 space-y-4">
                    <p className="text-muted-foreground italic leading-relaxed">
                      "Don't go on discussing what a good person should be. Just be one."
                    </p>
                  </blockquote>
                </div>

                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground font-mono">INTERESTS</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Defense Tech",
                      "Agentic AI",
                      "Cloud Infrastructure",
                      "Aviation",
                      "Cybersecurity & Encryption",
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
                  <div className="text-xs text-muted-foreground font-mono">Awards and Certificates</div>
                  <div className="space-y-3">
                    {awardsData.map((award, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {award.title}
                          <br />
                          - Issued by {award.issuer}, {award.date}
                        </span>
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
          ref={(el) => { sectionsRef.current[2] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-light">Experience</h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {experienceData.map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 pb-6 sm:pb-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2 flex flex-col">
                    <div className="text-base sm:text-lg font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.start_date}
                    </div>
                    <div className="text-sm font-light text-muted-foreground">—</div>
                    <div className="text-base sm:text-lg font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.end_date}
                    </div>
                  </div>

                  <div className="lg:col-span-10 space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base sm:text-lg font-medium">{job.role}</h3>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {job.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs text-muted-foreground border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={(el) => { sectionsRef.current[3] = el }}
          className="pt-20 sm:pt-32 pb-32 sm:pb-70 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-light">Education</h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {educationData.map((education, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 pb-6 sm:pb-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-3">
                    <div className="text-base sm:text-lg font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {education.year}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium">{education.degree}</h3>
                      <div className="text-muted-foreground">{education.school}</div>
                    </div>
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
      </main>

      <section
        id="projects"
        ref={(el) => { sectionsRef.current[4] = el }}
        className="min-h-screen pt-20 sm:pt-32 pb-20 sm:pb-32 opacity-0 max-w-5xl mx-auto px-6 sm:px-8 lg:px-16"
      >
        <div className="space-y-12 sm:space-y-16">
          <h2 className="text-2xl sm:text-3xl font-light">Project Highlight</h2>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
              {projectsData.map((project, index) => {
                const totalProjects = projectsData.length;
                const remainder = totalProjects % 3;
                const isInLastRow = index >= totalProjects - remainder && remainder !== 0;
                const positionInLastRow = isInLastRow ? index - (totalProjects - remainder) : -1;
                
                // Normal items span 2 columns in 6-column grid
                // For incomplete last row: offset to center them
                let gridColumnClass = 'lg:col-span-2';
                if (isInLastRow && remainder === 2) {
                  // Two items in last row: start at columns 2 and 4
                  gridColumnClass = positionInLastRow === 0 ? 'lg:col-span-2 lg:col-start-2' : 'lg:col-span-2 lg:col-start-4';
                } else if (isInLastRow && remainder === 1) {
                  // One item in last row: start at column 3 (centered)
                  gridColumnClass = 'lg:col-span-2 lg:col-start-3';
                }
                
                return (
                <article
                  key={index}
                  className={`group border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg flex flex-col ${gridColumnClass}`}
                >
                  <div className="aspect-video overflow-hidden py-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-base sm:text-lg font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github && (
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
                        )}
                        {project.external_link && (
                          <Link
                            href={project.external_link}
                            className="flex-shrink-0 p-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                            aria-label={`View ${project.title} external link`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap-reverse gap-2 mt-auto">
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
                );
              })}
            </div>
          </div>
      </section>

      {/* <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
      </main> */}

      <footer className="py-12 sm:py-16 border-t border-border max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">© 2026 Vincent Liu</div>
          </div>

          
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
