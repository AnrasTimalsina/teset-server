export function Projects() {
  const projects = [
    {
      title: "Task Management App",
      description:
        "A React-based task manager with local storage persistence, drag-and-drop functionality, and category filtering",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application integrating OpenWeather API with location-based forecasts and interactive charts",
      tags: ["Next.js", "API Integration", "TypeScript"],
      link: "#",
    },
    {
      title: "E-Commerce UI Kit",
      description: "A comprehensive UI component library for e-commerce platforms with Storybook documentation",
      tags: ["React", "Storybook", "CSS Modules"],
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog application with markdown support, user authentication, and comment system",
      tags: ["Next.js", "PostgreSQL", "Authentication"],
      link: "#",
    },
    {
      title: "Portfolio Generator",
      description: "Tool to generate beautiful portfolios from JSON configuration with multiple templates",
      tags: ["React", "Node.js", "Automation"],
      link: "#",
    },
    {
      title: "Habit Tracker",
      description:
        "Minimalist habit tracking application with streak counting, progress visualization, and data export",
      tags: ["Vue.js", "Chart.js", "PWA"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
