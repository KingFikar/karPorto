/* =====================================================
   Julfikar Portfolio — main.js v4 (minimal & precise)
   ===================================================== */

(() => {
  /* ---------- Scroll progress + header state ---------- */
  const progressBar = document.getElementById("scroll-progress");

  const header = document.getElementById("header");

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    progressBar.style.width = pct + "%";
    if (header) header.classList.toggle("is-scrolled", scrollTop > 20);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    nav.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Active link on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  const scrollActive = () => {
    const scrollDown = window.scrollY;
    let currentId = "";

    sections.forEach((current) => {
      const top = current.offsetTop - 120;
      const height = current.offsetHeight;
      if (scrollDown >= top && scrollDown < top + height) {
        currentId = current.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("active-link", href === "#" + currentId);
    });
  };
  window.addEventListener("scroll", scrollActive, { passive: true });
  scrollActive();

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-revealed"));
  }

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute("data-count") || "0", 10);
            const duration = 1400;
            const start = performance.now();

            const tick = (now) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              el.textContent = String(Math.floor(eased * target));
              if (t < 1) requestAnimationFrame(tick);
              else el.textContent = String(target);
            };
            requestAnimationFrame(tick);
            counterIO.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterIO.observe(c));
  }
})();
