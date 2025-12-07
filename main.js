//navigation menu toggle on hover
const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    menuBtn.addEventListener('mouseenter', () => {
        navLinks.classList.toggle('active');
    });

    menuBtn.addEventListener('mouseleave', () => {
        navLinks.classList.toggle('nonactive');
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