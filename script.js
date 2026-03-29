document.addEventListener("DOMContentLoaded", function () {
  const whatsappNumber = "919594810744";

  // Simple WhatsApp message for all normal WhatsApp buttons
  const simpleMessage =
    "Hi, I’m interested in applying for a job. Please let me know the available openings. Thank you.";

  const simpleWhatsappButtons = document.querySelectorAll(
    ".whatsapp-btn, .apply-whatsapp, .floating-whatsapp, .whatsapp-simple, .hero-whatsapp, .contact-whatsapp"
  );

  simpleWhatsappButtons.forEach((btn) => {
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

  // Send Details button -> WhatsApp form answers
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

      const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(url, "_blank");
    });
  }
});
