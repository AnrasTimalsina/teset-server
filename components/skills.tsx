export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "SQL", "REST APIs"],
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Figma", "Chrome DevTools", "Postman"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-foreground">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-bold text-accent">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
