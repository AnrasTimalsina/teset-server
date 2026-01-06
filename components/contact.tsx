"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-border space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Connect with me</h3>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
