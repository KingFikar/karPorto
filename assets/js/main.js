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
     8. FLOWING GRID CANVAS BACKGROUND
     - Diagonal grid lines that scroll forever
     - Traveling glow pulses along the lines for a "data flowing" feel
  ────────────────────────────────────────────────── */
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H, dpr;
    let offset = 0;        // diagonal flow offset (px)
    let pulseTime = 0;     // pulses phase (0..1 looping)

    const CELL = 80;                          // grid cell size in CSS px
    const LINE_COLOR = "rgba(255, 84, 54, 0.75)";
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.width  = window.innerWidth  * dpr;
      H = canvas.height = window.innerHeight * dpr;
      canvas.style.width  = window.innerWidth  + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Vertical grid lines, shifted by horizontal flow offset ox
    const drawVerticals = (ox, oy, w, h) => {
      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = -CELL + ox; x < w + CELL; x += CELL) {
        ctx.moveTo(x, -CELL + oy);
        ctx.lineTo(x, h + CELL);
      }
      ctx.stroke();
    };

    // Horizontal grid lines, shifted by vertical flow offset oy
    const drawHorizontals = (ox, oy, w, h) => {
      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let y = -CELL + oy; y < h + CELL; y += CELL) {
        ctx.moveTo(-CELL + ox, y);
        ctx.lineTo(w + CELL, y);
      }
      ctx.stroke();
    };

    // Glowing pulse traveling from (x1,y1) to (x2,y2); t is [0..1]
    const drawPulse = (x1, y1, x2, y2, t) => {
      const px = x1 + (x2 - x1) * t;
      const py = y1 + (y2 - y1) * t;

      // soft glow
      const grad = ctx.createRadialGradient(px, py, 0, px, py, 32);
      grad.addColorStop(0,   "rgba(255, 130, 90, 0.55)");
      grad.addColorStop(0.4, "rgba(255, 84, 54, 0.18)");
      grad.addColorStop(1,   "rgba(255, 84, 54, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, 32, 0, Math.PI * 2);
      ctx.fill();

      // bright core
      ctx.fillStyle = "rgba(255, 200, 170, 0.95)";
      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      const w = W / dpr;
      const h = H / dpr;

      ctx.clearRect(0, 0, w, h);

      offset    += 0.35;   // diagonal flow speed (px/frame)
      pulseTime += 0.011;  // pulse travel speed

      const ox = offset % CELL;
      const oy = (offset * 0.6) % CELL; // Y flows a bit slower for a true diagonal feel

      // 1) base flowing grid
      drawVerticals(ox, oy, w, h);
      drawHorizontals(ox, oy, w, h);

      // 2) traveling pulses along every horizontal line
      const visibleRows = Math.ceil(h / CELL) + 2;
      const startY = -CELL + oy;
      for (let i = 0; i < visibleRows; i++) {
        const y = startY + i * CELL;
        const phase = (pulseTime + i * 0.13) % 1;
        drawPulse(-CELL + ox, y, w + CELL, y, phase);
      }

      // 3) traveling pulses along every vertical line (different speed for variety)
      const visibleCols = Math.ceil(w / CELL) + 2;
      const startX = -CELL + ox;
      for (let j = 0; j < visibleCols; j++) {
        const x = startX + j * CELL;
        const phase = (pulseTime * 0.8 + j * 0.17) % 1;
        drawPulse(x, -CELL + oy, x, h + CELL, phase);
      }

      // 4) soft radial vignette so grid blends with content
      const vg = ctx.createRadialGradient(
        w / 2, h / 2, Math.min(w, h) * 0.3,
        w / 2, h / 2, Math.max(w, h) * 0.75
      );
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.45)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize, { passive: true });
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
