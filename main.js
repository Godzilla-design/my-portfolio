//navigation menu toggle on hover
const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

     // Theme toggle logic
      const themeToggle = document.getElementById("theme-toggle");
      const themeIcon = document.getElementById("theme-icon");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const savedTheme = localStorage.getItem("theme");
      function setTheme(mode) {
        if (mode === "light") {
          document.body.classList.remove("dark-mode");
          document.body.classList.add("light-mode");
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
        } else {
          document.body.classList.remove("light-mode");
          document.body.classList.add("dark-mode");
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
        }
        localStorage.setItem("theme", mode);
      }
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme(prefersDark ? "dark" : "light");
      }
      themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        setTheme(isDark ? "light" : "dark");
      });
      
    // Contact Form Submission

    document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    
    let data = new FormData(form);
    let response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        document.getElementById("successMessage").classList.add("show");
        form.reset();
        setTimeout(() => {
            document.getElementById("successMessage").classList.remove("show");
        }, 3500);
    }
});