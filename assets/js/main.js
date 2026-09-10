/* =====================================================
   Julfikar Portfolio — main.js v5 (animation-rich)
   ===================================================== */

(() => {
  /* ──────────────────────────────────────────────────
     0. PAGE LOADER
  ────────────────────────────────────────────────── */
  const loader = document.getElementById("page-loader");
  const loaderBar = document.getElementById("loader-bar");
  
  if (loader && loaderBar) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 90) progress = 90;
      loaderBar.style.width = progress + "%";
    }, 100);

    window.addEventListener("load", () => {
      clearInterval(interval);
      loaderBar.style.width = "100%";
      setTimeout(() => {
        loader.classList.add("is-hidden");
        document.body.classList.add("is-loaded");
      }, 300);
    });
  }

  /* ──────────────────────────────────────────────────
     0b. CUSTOM CURSOR
  ────────────────────────────────────────────────── */
  const cursorDot = document.getElementById("cursor-dot");
  const cursorRing = document.getElementById("cursor-ring");

  if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      cursorRing.style.left = ringX + "px";
      cursorRing.style.top = ringY + "px";
      requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);

    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll("a, button, .showcase__item, .edu-item, .skillcat");
    hoverElements.forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  /* ──────────────────────────────────────────────────
     1. SCROLL PROGRESS + HEADER STATE
  ────────────────────────────────────────────────── */
  const progressBar = document.getElementById("scroll-progress");
  const header = document.getElementById("header");

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (scrollTop / max) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + "%";
    if (header) header.classList.toggle("is-scrolled", scrollTop > 20);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ──────────────────────────────────────────────────
     2. MOBILE NAV
  ────────────────────────────────────────────────── */
  const nav    = document.getElementById("nav");
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

  /* ──────────────────────────────────────────────────
     3. ACTIVE LINK ON SCROLL
  ────────────────────────────────────────────────── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".nav__link");

  const scrollActive = () => {
    const scrollDown = window.scrollY;
    let currentId = "";
    sections.forEach((s) => {
      const top    = s.offsetTop - 120;
      const height = s.offsetHeight;
      if (scrollDown >= top && scrollDown < top + height) currentId = s.id;
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("active-link", href === "#" + currentId);
    });
  };
  window.addEventListener("scroll", scrollActive, { passive: true });
  scrollActive();

  /* ──────────────────────────────────────────────────
     4. SCROLL REVEAL (supports data-dir="left/right/scale")
  ────────────────────────────────────────────────── */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger sibling reveals slightly
            setTimeout(() => {
              entry.target.classList.add("is-revealed");
            }, i * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-revealed"));
  }

  /* ──────────────────────────────────────────────────
     5. STAT COUNTERS with pop animation
  ────────────────────────────────────────────────── */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el       = entry.target;
            const target   = parseInt(el.getAttribute("data-count") || "0", 10);
            const duration = 1400;
            const start    = performance.now();

            const tick = (now) => {
              const t      = Math.min((now - start) / duration, 1);
              const eased  = 1 - Math.pow(1 - t, 3);
              el.textContent = String(Math.floor(eased * target));
              if (t < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent = String(target);
                el.classList.add("is-counted");
                setTimeout(() => el.classList.remove("is-counted"), 500);
              }
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

  /* ──────────────────────────────────────────────────
     6. TYPING EFFECT on hero greeting
  ────────────────────────────────────────────────── */
  const greetingEl = document.querySelector(".hero__greeting");
  if (greetingEl) {
    window.addEventListener("load", () => {
      const fullText = greetingEl.textContent.trim();
      greetingEl.textContent = "";

      const cursor = document.createElement("span");
      cursor.className = "typing-cursor";
      greetingEl.parentElement.appendChild(cursor);

      let idx = 0;
      const typeSpeed = 55;

      const typeChar = () => {
        if (idx < fullText.length) {
          greetingEl.textContent += fullText[idx];
          idx++;
          setTimeout(typeChar, typeSpeed);
        } else {
          setTimeout(() => {
            cursor.style.animation = "none";
            cursor.style.opacity = "0";
            cursor.style.transition = "opacity 0.5s";
          }, 2000);
        }
      };

      setTimeout(typeChar, 900);
    });
  }

  /* ──────────────────────────────────────────────────
     7. 3D TILT on showcase cards
  ────────────────────────────────────────────────── */
  const tiltCards = document.querySelectorAll(".showcase__item");
  const MAX_TILT  = 8; // degrees

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const rotX   = -dy * MAX_TILT;
      const rotY   =  dx * MAX_TILT;

      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
      card.style.transition = "transform 0.1s linear";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    });
  });

  /* ──────────────────────────────────────────────────
     8. PARTICLE CANVAS BACKGROUND
  ────────────────────────────────────────────────── */
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx    = canvas.getContext("2d");
    let W, H, particles;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const randomBetween = (a, b) => a + Math.random() * (b - a);

    const createParticles = () => {
      const count = Math.floor((W * H) / 14000);
      particles = Array.from({ length: count }, () => ({
        x:    randomBetween(0, W),
        y:    randomBetween(0, H),
        r:    randomBetween(0.6, 1.8),
        vx:   randomBetween(-0.18, 0.18),
        vy:   randomBetween(-0.18, 0.18),
        alpha: randomBetween(0.2, 0.7),
      }));
    };

    const drawLine = (p1, p2, dist, maxDist) => {
      const opacity = (1 - dist / maxDist) * 0.25;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(255, 84, 54, ${opacity})`;
      ctx.lineWidth   = 0.5;
      ctx.stroke();
    };

    const MAX_DIST = 120;

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 84, 54, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) drawLine(particles[i], particles[j], dist, MAX_DIST);
        }
      }

      requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────────
     9. STAGGER REVEAL for grid children
  ────────────────────────────────────────────────── */
  const staggerGroups = document.querySelectorAll(
    ".showcase, .skills__categories, .edu-list, .org-list, .experience__list"
  );

  if ("IntersectionObserver" in window) {
    const staggerIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
              child.style.transitionDelay = `${i * 80}ms`;
              child.classList.add("is-visible");
            });
            staggerIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((child) => {
        if (!child.hasAttribute("data-reveal")) {
          child.classList.add("stagger-child");
        }
      });
      staggerIO.observe(group);
    });
  }

})();
