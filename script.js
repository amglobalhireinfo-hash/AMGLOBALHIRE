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

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name")?.value?.trim() || "";
    const phone = document.getElementById("phone")?.value?.trim() || "";
    const location = document.getElementById("location")?.value?.trim() || "";
    const role = document.getElementById("role")?.value?.trim() || "";
    const experience = document.getElementById("experience")?.value?.trim() || "";

    const message = `Quick Apply / Hiring Enquiry

1. Your Name: ${name}
2. Contact number: ${phone}
3. Location / nearest station: ${location}
4. Looking for which Profile / Role: ${role}
5. Experience or Fresher (if experience - into which profile and number of years): ${experience}`;

    const whatsappURL = `https://wa.me/919594810744?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  });
}
