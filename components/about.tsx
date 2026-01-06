export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-6 text-foreground">About</h2>
          <nav className="space-y-3">
            <a href="#about" className="text-accent font-medium block">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors block">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors block">
              Skills
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I'm a Bachelor of Computer Applications (BCA) student with a keen interest in web development, software
              engineering, and creative problem-solving. Currently on my learning journey, I'm passionate about building
              applications that are both functional and beautiful.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My focus areas include full-stack web development, UI/UX design principles, and modern JavaScript
              frameworks. I believe in continuous learning and staying updated with the latest technologies and best
              practices in the industry.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, reading technical articles, or
              contributing to open-source projects. I'm excited to collaborate and take on challenges that push my
              boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
