export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {currentYear} All rights reserved.</p>
          <p className="text-sm text-primary-foreground/70">Crafted with passion | Still learning, always growing</p>
        </div>
      </div>
    </footer>
  )
}
