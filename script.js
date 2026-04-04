
// MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => menu.classList.toggle("show"));
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => menu.classList.remove("show"));
  });
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");
let started = false;

function runCounters() {
  const stats = document.querySelector(".stats");
  if (!stats) return;

  const top = stats.getBoundingClientRect().top;

  if (top < window.innerHeight - 100 && !started) {
    started = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 60;

      function update() {
        count += speed;

        if (count < target) {
          counter.innerText = Math.floor(count) + (target === 95 ? "%" : "+");
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + (target === 95 ? "%" : "+");
        }
      }

      update();
    });
  }
}

window.addEventListener("scroll", runCounters);
runCounters();

// WHATSAPP LOGIC
document.addEventListener("DOMContentLoaded", function () {

  const whatsappNumber = "919594810744";

  // SIMPLE BUTTON (Apply on WhatsApp)
  const simpleMessage =
    "Hi, I’m interested in applying for a job. Please let me know the available openings. Thank you.";

  document.querySelectorAll(".whatsapp-simple").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(simpleMessage);

      window.open(url, "_blank");
    });
  });

  // FORM TO WHATSAPP (MAIN FEATURE 🔥)
  const sendBtn = document.getElementById("sendDetailsBtn");

  if (sendBtn) {
    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const location = document.getElementById("location").value.trim();
      const role = document.getElementById("role").value.trim();
      const experience = document.getElementById("experience").value.trim();

      // VALIDATION
      if (!name || !phone || !location || !role || !experience) {
        alert("Please fill all details before sending.");
        return;
      }

      // FINAL MESSAGE (CLEAN FORMAT)
      const message =
        "*New Candidate Application*%0A%0A" +
        "*Name:* " + name + "%0A" +
        "*Phone:* " + phone + "%0A" +
        "*Location:* " + location + "%0A" +
        "*Role:* " + role + "%0A" +
        "*Experience:* " + experience;

      const url = "https://wa.me/" + whatsappNumber + "?text=" + message;

      window.open(url, "_blank");
    });
  }

  // FORM SUBMIT SUPPORT (ENTER KEY)
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      sendBtn.click();
    });
  }

});
