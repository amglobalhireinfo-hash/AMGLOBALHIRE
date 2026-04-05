// =========================================================
// AMGLOBALHIRE — FINAL UPGRADED READY TO USE JS
// Premium • Smooth • Mobile Friendly • WhatsApp Form Ready
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // SELECTORS
  // =========================================================
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");
  const revealElements = document.querySelectorAll(".reveal");
  const intro = document.getElementById("intro");
  const mainSite = document.getElementById("main-site");
  const header = document.querySelector(".header");
  const counters = document.querySelectorAll(".counter");
  const sendDetailsBtn = document.getElementById("sendDetailsBtn");
  const contactForm = document.getElementById("contactForm");

  // =========================================================
  // MOBILE MENU TOGGLE
  // =========================================================
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("show");

      if (menu.classList.contains("show")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = "hidden";
      } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "";
      }
    });

    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("click", (e) => {
      const clickedInsideMenu = menu.contains(e.target);
      const clickedMenuBtn = menuBtn.contains(e.target);

      if (
        menu.classList.contains("show") &&
        !clickedInsideMenu &&
        !clickedMenuBtn &&
        window.innerWidth <= 980
      ) {
        menu.classList.remove("show");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "";
      }
    });
  }

  // =========================================================
  // REVEAL ON SCROLL
  // =========================================================
  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // =========================================================
  // HEADER SCROLL EFFECT
  // =========================================================
  function headerEffect() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.style.background = "rgba(5,12,24,.88)";
      header.style.boxShadow = "0 12px 30px rgba(0,0,0,.28)";
    } else {
      header.style.background = "rgba(5,12,24,.68)";
      header.style.boxShadow = "0 10px 35px rgba(0,0,0,.18)";
    }
  }

  headerEffect();
  window.addEventListener("scroll", headerEffect);

  // =========================================================
  // INTRO LOGO ANIMATION
  // =========================================================
  function startMainSite() {
    if (mainSite) {
      mainSite.classList.add("show");
    }
    document.body.style.overflow = "";
  }

  if (intro) {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      intro.style.transition = "opacity 0.8s ease";
      intro.style.opacity = "0";

      setTimeout(() => {
        intro.style.display = "none";
        startMainSite();
      }, 800);
    }, 3800);
  } else {
    startMainSite();
  }

  // =========================================================
  // COUNTER ANIMATION
  // =========================================================
  let counterStarted = false;

  function runCounters() {
    const statsSection = document.querySelector(".stats");
    if (!statsSection || counterStarted) return;

    const sectionTop = statsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const increment = Math.max(1, Math.ceil(target / 100));
        let current = 0;

        const updateCounter = () => {
          current += increment;

          if (current < target) {
            counter.innerText = current;
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target;
          }
        };

        updateCounter();
      });

      counterStarted = true;
    }
  }

  runCounters();
  window.addEventListener("scroll", runCounters);

  // =========================================================
  // WHATSAPP APPLY BUTTONS
  // =========================================================
  const whatsappButtons = document.querySelectorAll(".whatsapp-simple");
  const whatsappNumber = "919594810744";

  whatsappButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#" || this.getAttribute("href") === "") {
        e.preventDefault();
        const msg = encodeURIComponent(
          "Hello AMGLOBALHIRE,\n\nI want to apply for job opportunities.\nPlease share available openings."
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
      }
    });
  });

  // =========================================================
  // CONTACT FORM -> WHATSAPP MESSAGE
  // =========================================================
  if (sendDetailsBtn && contactForm) {
    sendDetailsBtn.addEventListener("click", () => {
      const name = document.getElementById("name")?.value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const location = document.getElementById("location")?.value.trim();
      const role = document.getElementById("role")?.value.trim();
      const experience = document.getElementById("experience")?.value.trim();

      if (!name || !phone || !location || !role || !experience) {
        alert("Please fill all details before sending.");
        return;
      }

      const message = `Hello AMGLOBALHIRE,

I want to apply / share my hiring details.

Name: ${name}
Phone: ${phone}
Location: ${location}
Role/Profile: ${role}
Experience: ${experience}

Please connect with me.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
  }

  // =========================================================
  // ACTIVE MENU LINK ON SCROLL
  // =========================================================
  const sections = document.querySelectorAll("section[id]");

  function activeMenuOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute("id");

      const navLink = document.querySelector(`.menu a[href*="${sectionId}"]`);
      if (!navLink) return;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        menuLinks.forEach(link => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  }

  activeMenuOnScroll();
  window.addEventListener("scroll", activeMenuOnScroll);

  // =========================================================
  // SAFE RESIZE FIX
  // =========================================================
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && menu) {
      menu.classList.remove("show");
      if (menuBtn) {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
      document.body.style.overflow = "";
    }
  });
});
