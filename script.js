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

  // =========================================================
  // MOBILE MENU TOGGLE
  // =========================================================
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("show");

      // icon change
      if (menu.classList.contains("show")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = "hidden";
      } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "";
      }
    });

    // close menu on link click
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "";
      });
    });

    // close menu if clicked outside (mobile only)
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
    }, 3800); // intro duration
  } else {
    startMainSite();
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
