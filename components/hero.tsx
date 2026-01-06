export function Hero() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Building Tomorrow, Learning Today
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          BCA Student passionate about creating elegant solutions and exploring the intersection of design and
          development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
