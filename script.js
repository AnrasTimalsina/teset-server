// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
  })
})

// Contact Form Handling
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = contactForm.querySelector('input[type="text"]').value
  const email = contactForm.querySelector('input[type="email"]').value
  const message = contactForm.querySelector("textarea").value

  // Simple validation
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Success message
  alert("Thank you for your message! I will get back to you soon.")
  contactForm.reset()
})

// Smooth scroll for CTA button
document.querySelector(".cta-button").addEventListener("click", (e) => {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute("href"))
  target.scrollIntoView({ behavior: "smooth" })
})
