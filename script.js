// =========================================================
// AMGLOBALHIRE — FINAL READY TO USE JS
// Clean • Smooth • Premium • Mobile Friendly
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // ===== SELECTORS =====
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");
  const revealElements = document.querySelectorAll(".reveal");
  const intro = document.getElementById("intro");
  const mainSite = document.getElementById("main-site");
  const header = document.querySelector(".header");
  const counters = document.querySelectorAll(".counter");
  const sendBtn = document.getElementById("sendDetailsBtn");

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
    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = Math.max(15, Math.floor(2000 / target));

        const updateCounter = () => {
          if (count < target) {
            count += Math.ceil(target / 80);
            if (count > target) count = target;

            if (target === 95) {
              counter.innerText = count + "%";
            } else if (target === 24) {
              counter.innerText = count + "h";
            } else {
              counter.innerText = count + "+";
            }

            setTimeout(updateCounter, speed);
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
  // WHATSAPP FORM
  // =========================================================
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const name = document.getElementById("name")?.value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const location = document.getElementById("location")?.value.trim();
      const role = document.getElementById("role")?.value.trim();
      const experience = document.getElementById("experience")?.value.trim();

      if (!name || !phone || !location || !role || !experience) {
        alert("Please fill all details first.");
        return;
      }

      const message =
`Hello AMGLOBALHIRE,

My Details:

Name: ${name}
Phone: ${phone}
Location: ${location}
Role Looking For: ${role}
Experience: ${experience}`;

      const whatsappNumber = "919594810744";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank");
    });
  }

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
