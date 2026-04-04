

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => menu.classList.toggle("show"));
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => menu.classList.remove("show"));
  });
}

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

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
      const update = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.floor(count) + (target === 95 ? "%" : "+");
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + (target === 95 ? "%" : "+");
        }
      };
      update();
    });
  }
}
window.addEventListener("scroll", runCounters);
runCounters();

document.addEventListener("DOMContentLoaded", function () {
  const whatsappNumber = "919594810744";
  const simpleMessage = "Hi, I’m interested in applying for a job. Please let me know the available openings. Thank you.";

  document.querySelectorAll(".whatsapp-simple").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(simpleMessage);
      window.open(url, "_blank");
    });
  });

  const sendDetailsBtn = document.getElementById("sendDetailsBtn");
  if (sendDetailsBtn) {
    sendDetailsBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const name = document.getElementById("name")?.value.trim() || "";
      const phone = document.getElementById("phone")?.value.trim() || "";
      const location = document.getElementById("location")?.value.trim() || "";
      const role = document.getElementById("role")?.value.trim() || "";
      const experience = document.getElementById("experience")?.value.trim() || "";

      const message =
        "Quick Apply / Hiring Enquiry\n\n" +
        "1. Your Name: " + name + "\n" +
        "2. Contact number: " + phone + "\n" +
        "3. Location / nearest station: " + location + "\n" +
        "4. Looking for which Profile / Role: " + role + "\n" +
        "5. Experience or Fresher (if experience - into which profile and number of years): " + experience;

      const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = document.getElementById("sendDetailsBtn");
      if (btn) btn.click();
    });
  }
});
