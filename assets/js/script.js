document.addEventListener("DOMContentLoaded", function () {
  // sek go scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 107, // adjust navbarr
          behavior: "smooth",
        });
      }
    });
  });

  // class saat scroll
  window.addEventListener("scroll", function () {
    const experienceSections = document.querySelectorAll(
      ".experienceContainer"
    );
    const navLinks = document.querySelectorAll(".dropdown-menu a");

    let current = "";

    experienceSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
