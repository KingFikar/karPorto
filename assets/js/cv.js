/* =====================================================
   CV PDF generator — HRD-standard layout
   Renders the CV template inside an off-screen iframe so
   the heavy html2canvas capture does not block the main
   page (prevents the "ngestack" freeze).
   ===================================================== */
(function () {
  "use strict";

  const FILENAME = "CV-Julfikar-Fullstack-Developer.pdf";

  // ---- CV HTML template (A4, embedded styles) ----
  const TEMPLATE = `
<style>
  html, body { margin: 0; padding: 0; background: #ffffff; }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    color: #1a1a1e;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .cv-page {
    width: 210mm;
    min-height: 297mm;
    padding: 16mm 16mm 14mm 16mm;
    box-sizing: border-box;
    background: #ffffff;
    color: #1a1a1e;
    font-size: 10.5pt;
    line-height: 1.45;
  }

  /* Header */
  .cv-header { margin-bottom: 10mm; }
  .cv-accent-bar {
    width: 18mm; height: 1.6mm;
    background: #ff5436;
    margin-bottom: 4mm;
  }
  .cv-name {
    font-size: 26pt; font-weight: 700;
    letter-spacing: -0.01em; line-height: 1.05;
    margin: 0 0 2mm 0;
    text-transform: uppercase;
    color: #1a1a1e;
  }
  .cv-title {
    font-size: 13pt; color: #ff5436;
    margin: 0 0 4mm 0; font-weight: 500;
  }
  .cv-contact {
    font-size: 9.5pt; color: #4a4a52; line-height: 1.55;
  }
  .cv-contact .sep { color: #c8c8d0; margin: 0 6px; }
  .cv-contact a { color: #4a4a52; text-decoration: none; }
  .cv-rule {
    border: none; border-top: 0.6pt solid #1a1a1e;
    margin: 5mm 0 0 0;
  }

  /* Sections */
  .cv-section { margin-top: 7mm; }
  .cv-section:first-of-type { margin-top: 6mm; }
  .cv-h {
    display: flex; align-items: center; gap: 3mm;
    margin: 0 0 3mm 0;
    padding-bottom: 1.5mm;
    border-bottom: 0.4pt solid #d8d8de;
  }
  .cv-h-square {
    width: 2mm; height: 3mm;
    background: #ff5436; flex-shrink: 0;
  }
  .cv-h-text {
    font-size: 10.5pt; font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #1a1a1e;
  }

  /* Summary */
  .cv-summary {
    margin: 0; font-size: 10pt; color: #1a1a1e; line-height: 1.55;
  }

  /* Skills (2 cols) */
  .cv-skills {
    display: grid; grid-template-columns: 1fr 1fr;
    column-gap: 8mm; row-gap: 4mm;
  }
  .cv-skill-group { break-inside: avoid; }
  .cv-skill-group h4 {
    margin: 0 0 1.5mm 0;
    font-size: 10pt; font-weight: 700; color: #1a1a1e;
  }
  .cv-skill-items {
    margin: 0; font-size: 9.5pt; color: #4a4a52; line-height: 1.5;
  }

  /* Entries (experience / education / certs) */
  .cv-entry { margin-bottom: 5mm; break-inside: avoid; page-break-inside: avoid; }
  .cv-entry:last-child { margin-bottom: 0; }
  .cv-entry-head {
    display: flex; justify-content: space-between; align-items: baseline;
    gap: 4mm; margin-bottom: 1mm;
  }
  .cv-entry-role {
    font-size: 11pt; font-weight: 700;
    color: #1a1a1e; line-height: 1.25;
  }
  .cv-entry-period {
    font-size: 9.5pt; color: #6a6a72;
    white-space: nowrap; flex-shrink: 0;
  }
  .cv-entry-org {
    font-size: 10pt; font-style: italic;
    color: #ff5436; margin: 0 0 1.5mm 0;
  }
  .cv-entry-desc {
    margin: 0 0 2mm 0;
    font-size: 10pt; color: #1a1a1e; line-height: 1.5;
  }
  .cv-bullets { margin: 0; padding: 0; list-style: none; }
  .cv-bullets li {
    position: relative; padding-left: 4.5mm;
    margin-bottom: 1mm;
    font-size: 9.5pt; color: #1a1a1e; line-height: 1.5;
  }
  .cv-bullets li::before {
    content: ""; position: absolute; left: 0; top: 1.6mm;
    width: 1.2mm; height: 1.2mm;
    background: #ff5436; border-radius: 50%;
  }
  .cv-entry-note {
    margin: 0; font-size: 9.5pt; color: #4a4a52; line-height: 1.5;
  }

  /* Languages */
  .cv-lang-list { margin: 0; padding: 0; list-style: none; }
  .cv-lang-list li {
    font-size: 10pt; margin-bottom: 1mm; color: #1a1a1e;
  }
  .cv-lang-list strong { font-weight: 700; }
  .cv-lang-list .lvl { color: #6a6a72; font-weight: 400; }

  /* Footer */
  .cv-foot {
    margin-top: 10mm; padding-top: 3mm;
    border-top: 0.4pt solid #d8d8de;
    display: flex; justify-content: space-between;
    font-size: 8.5pt; color: #6a6a72;
  }
</style>

<div class="cv-page">
  <header class="cv-header">
    <div class="cv-accent-bar"></div>
    <h1 class="cv-name">Julfikar</h1>
    <div class="cv-title">Fullstack Web &amp; Mobile Developer</div>
    <div class="cv-contact">
      julfikarbumigora166@gmail.com
      <span class="sep">&bull;</span>
      +62 853 3316 9606
      <span class="sep">&bull;</span>
      Mataram, Indonesia
      <br>
      linkedin.com/in/jul-fikar-06260927a
    </div>
    <hr class="cv-rule">
  </header>

  <section class="cv-section">
    <div class="cv-h"><div class="cv-h-square"></div><div class="cv-h-text">Ringkasan Profesional</div></div>
    <p class="cv-summary">
      Lulusan S1 Ilmu Komputer dari Universitas Bumigora dengan fokus pada intelligent systems.
      Berpengalaman membangun ekosistem digital end-to-end &mdash; arsitektur backend (Laravel/PHP),
      aplikasi mobile cross-platform (Flutter), dan antarmuka web modern (React). Kombinasi analisis
      sistem yang kuat, pemahaman Machine Learning, dan pengalaman operasi pada layanan kesehatan
      serta portal media berskala produksi.
    </p>
  </section>

  <section class="cv-section">
    <div class="cv-h"><div class="cv-h-square"></div><div class="cv-h-text">Keahlian Teknis</div></div>
    <div class="cv-skills">
      <div class="cv-skill-group">
        <h4>Backend &amp; Web</h4>
        <p class="cv-skill-items">PHP / Laravel &bull; Node.js &bull; RESTful API &bull; MySQL</p>
      </div>
      <div class="cv-skill-group">
        <h4>Mobile &amp; Frontend</h4>
        <p class="cv-skill-items">Flutter &bull; React JS &bull; Tailwind CSS &bull; Figma</p>
      </div>
      <div class="cv-skill-group">
        <h4>Infrastructure</h4>
        <p class="cv-skill-items">Git &bull; Podman / Containers &bull; Red Hat OpenShift &bull; Ubuntu / Windows Server</p>
      </div>
      <div class="cv-skill-group">
        <h4>Konsep Tambahan</h4>
        <p class="cv-skill-items">Machine Learning &bull; Analisis Sistem &bull; Versioning</p>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-h"><div class="cv-h-square"></div><div class="cv-h-text">Pengalaman Kerja</div></div>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <div class="cv-entry-role">Programmer</div>
        <div class="cv-entry-period">Sep 2025 &ndash; Sekarang</div>
      </div>
      <div class="cv-entry-org">Rumah Sakit Mutiara Sukma</div>
      <p class="cv-entry-desc">Membangun dan mengelola Sistem Informasi Rumah Sakit serta sistem kebutuhan internal &mdash; dari arsitektur backend hingga aplikasi mobile.</p>
      <ul class="cv-bullets">
        <li>Kolaborator pada repositori GitHub utama instansi (websiteRSJMS).</li>
        <li>Mengelola proses publishing, verifikasi metadata, dan versioning aplikasi medis di Google Play Console.</li>
        <li>Membangun sistem internal untuk operasional rumah sakit.</li>
      </ul>
    </div>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <div class="cv-entry-role">Fullstack Web Developer / Staff IT</div>
        <div class="cv-entry-period">Nov 2024 &ndash; Jun 2025</div>
      </div>
      <div class="cv-entry-org">Towa News</div>
      <p class="cv-entry-desc">Membangun, mengembangkan, dan mengelola website portal berita perusahaan &mdash; memastikan performa optimal untuk keterlibatan audiens.</p>
      <ul class="cv-bullets">
        <li>Membangun dan mengelola website portal berita Towa News end-to-end.</li>
        <li>Menganalisis performa platform untuk optimasi keterlibatan audiens.</li>
        <li>Mengelola infrastruktur teknis sebagai Staff IT.</li>
      </ul>
    </div>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <div class="cv-entry-role">Fullstack Web Developer</div>
        <div class="cv-entry-period">Jan &ndash; Nov 2024</div>
      </div>
      <div class="cv-entry-org">Cyber Protocol &ndash; Pilkada</div>
      <p class="cv-entry-desc">Merancang, menyediakan, dan mengelola website sistem perhitungan suara untuk seluruh calon kepala daerah partai Gerindra di Nusa Tenggara Barat.</p>
      <ul class="cv-bullets">
        <li>Membangun platform perhitungan suara real-time untuk Pilkada 2024.</li>
        <li>Bekerja langsung dengan klien untuk memastikan kebutuhan sistem terpenuhi selama masa kontrak.</li>
        <li>Mengelola deployment untuk banyak calon secara paralel.</li>
      </ul>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-h"><div class="cv-h-square"></div><div class="cv-h-text">Pendidikan</div></div>
    <div class="cv-entry">
      <div class="cv-entry-head">
        <div class="cv-entry-role">S1 Ilmu Komputer</div>
        <div class="cv-entry-period">2020 &ndash; 2024</div>
      </div>
      <div class="cv-entry-org">Universitas Bumigora</div>
      <p class="cv-entry-note">Fokus pada intelligent systems dan pengembangan aplikasi modern lintas platform.</p>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-h"><div class="cv-h-square"></div><div class="cv-h-text">Sertifikasi</div></div>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <div class="cv-entry-role">Red Hat OpenShift Development I (DO188)</div>
        <div class="cv-entry-period">2024</div>
      </div>
      <div class="cv-entry-org">Red Hat</div>
      <p class="cv-entry-note">Containerization dengan Podman dan dasar pengembangan di OpenShift.</p>
    </div>

    <div class="cv-entry">
      <div class="cv-entry-head">
        <div class="cv-entry-role">Microlearning Pembentukan dan Pengelolaan TTIS</div>
        <div class="cv-entry-period">2026</div>
      </div>
      <div class="cv-entry-org">Balai Pelatihan Kesehatan Cikarang</div>
      <p class="cv-entry-note">Tim Tanggap Insiden Siber (TTIS) di Fasilitas Pelayanan Kesehatan.</p>
    </div>
  </section>

  <section class="cv-section">
    <div class="cv-h"><div class="cv-h-square"></div><div class="cv-h-text">Bahasa</div></div>
    <ul class="cv-lang-list">
      <li><strong>Indonesian</strong> <span class="lvl">&mdash; Native</span></li>
      <li><strong>English</strong> <span class="lvl">&mdash; Professional working</span></li>
    </ul>
  </section>

  <footer class="cv-foot">
    <span>CV &mdash; Julfikar &bull; Generated <span id="cvDate"></span></span>
    <span>Page 1</span>
  </footer>
</div>
`;

  // ---- Build an off-screen iframe containing the CV template ----
  function buildIframe() {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.cssText =
      "position:fixed;left:-99999px;top:0;width:210mm;height:297mm;" +
      "border:0;visibility:hidden;pointer-events:none;z-index:-1;";
    document.body.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write("<!doctype html><html><head><meta charset='utf-8'></head><body>" + TEMPLATE + "</body></html>");
    doc.close();

    return { iframe, doc };
  }

  // ---- Wire up button ----
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("cvDownload");
    if (!btn) return;

    btn.addEventListener("click", function () {
      if (!window.jspdf || !window.jspdf.jsPDF) {
        alert("PDF library gagal dimuat. Periksa koneksi internet Anda lalu coba lagi.");
        return;
      }

      // Mark busy state
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML =
        '<i class="bx bx-loader-alt bx-spin"></i>' +
        '<span>Generating PDF\u2026</span>';

      // Defer one frame so the spinner paints before we block the main thread
      requestAnimationFrame(function () {
        setTimeout(function () { generatePDF(btn, original); }, 30);
      });
    });
  });

  function generatePDF(btn, originalHTML) {
    let iframe = null;
    try {
      const built = buildIframe();
      iframe = built.iframe;
      const idoc = built.doc;

      // Fill dynamic date inside the iframe document
      const dateEl = idoc.getElementById("cvDate");
      if (dateEl) {
        dateEl.textContent = new Date().toLocaleDateString("id-ID", {
          day: "numeric", month: "long", year: "numeric",
        });
      }

      const target = idoc.querySelector(".cv-page");
      if (!target) throw new Error("CV template missing");

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait", compress: true });

      pdf.html(target, {
        autoPaging: "text",
        margin: [0, 0, 0, 0],
        x: 0,
        y: 0,
        width: 210,
        windowWidth: 794,
        html2canvas: {
          scale: 1.5,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
        },
        callback: function (doc) {
          doc.save(FILENAME);
          cleanup(iframe, btn, originalHTML);
        },
      });
    } catch (err) {
      console.error("CV generation failed:", err);
      alert("Gagal membuat PDF: " + (err && err.message ? err.message : err));
      cleanup(iframe, btn, originalHTML);
    }
  }

  function cleanup(iframe, btn, originalHTML) {
    if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  }
})();
