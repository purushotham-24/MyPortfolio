document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "⬆️";
  scrollBtn.id = "scrollToTop";
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 40px;
    right: 20px;
    padding: 10px 15px;
    font-size: 18px;
    display: none;
    border: none;
    border-radius: 50%;
    background: #00adb5;
    color: white;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Show scroll-to-top button after scrolling down
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";

    // Navbar shadow
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 60) {
      navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    } else {
      navbar.style.boxShadow = "none";
    }

    // Active link highlight
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        document.querySelectorAll(".nav-links a").forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
