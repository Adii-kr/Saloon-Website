document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 100 ? "flex" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const counterBox = document.getElementById("counter-box");
  const counters = document.querySelectorAll(".counter");

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.count, 10);
      const duration = 1600;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        counter.textContent = Math.floor(eased * target).toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(step);
    });
  };

  if (counterBox) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(counterBox);
  }

  const yearEl = document.getElementById("copyrightYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const BOOKING_EMAIL = "adityamay0101@gmail.com";

  const form = document.getElementById("bookingForm");
  const statusEl = document.getElementById("bookingFormStatus");
  const submitBtn = document.getElementById("bookingSubmitBtn");

  if (form) {
    const dateInput = document.getElementById("bookingDate");
    if (dateInput) {
      dateInput.min = new Date().toISOString().split("T")[0];
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (form._honey.value !== "") {
        return;
      }

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        statusEl.textContent = "Please fill in all fields correctly.";
        statusEl.className = "form-status mt-3 text-danger";
        return;
      }

      const formData = new FormData(form);
      formData.append("_subject", "New Appointment Booking - SaloonX");
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      statusEl.textContent = "";
      statusEl.className = "form-status mt-3";

      try {
        const response = await fetch(
          `https://formsubmit.co/ajax/${BOOKING_EMAIL}`,
          {
            method: "POST",
            headers: { Accept: "application/json" },
            body: formData,
          },
        );

        if (!response.ok) throw new Error("Request failed");

        statusEl.textContent =
          "Thanks! Your appointment request has been sent — we'll confirm shortly.";
        statusEl.className = "form-status mt-3 text-success";
        form.reset();
        form.classList.remove("was-validated");
      } catch (error) {
        console.error("Booking form submission failed:", error);
        statusEl.textContent =
          "Something went wrong sending your request. Please try again, or call us directly.";
        statusEl.className = "form-status mt-3 text-danger";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Book Now";
      }
    });
  }
});
