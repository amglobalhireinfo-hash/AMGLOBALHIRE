// =========================
// MENU TOGGLE
// =========================
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");
    if (menu.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when link clicked
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
      const icon = menuBtn.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
}

// =========================
// REVEAL ANIMATION
// =========================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =========================
// COUNTER ANIMATION
// =========================
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters() {
  if (counterStarted) return;

  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    counterStarted = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = Math.max(15, Math.floor(2000 / target));

      const updateCounter = () => {
        if (count < target) {
          count += Math.ceil(target / 80);
          if (count > target) count = target;
          counter.innerText = count;
          setTimeout(updateCounter, speed);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }
}

window.addEventListener("scroll", runCounters);
window.addEventListener("load", runCounters);

// =========================
// WHATSAPP FORM
// =========================
function sendToWhatsApp(e){
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const location = document.getElementById('location').value.trim();
  const role = document.getElementById('role').value.trim();
  const message = document.getElementById('message').value.trim();

  const text = `Hello AMGLOBALHIRE

Name: ${name}
Phone: ${phone}
Location: ${location}
Role: ${role}
Message: ${message}`;

  window.open(`https://wa.me/919594810744?text=${encodeURIComponent(text)}`, '_blank');
}

// =========================
// LOADER
// =========================
window.addEventListener("load", function(){
  const loader = document.getElementById("premiumLoader");
  if(loader){
    setTimeout(() => {
      loader.classList.add("hide");
    }, 700);
  }
});
