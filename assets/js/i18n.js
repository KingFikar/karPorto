/* =====================================================
   i18n.js - Julfikar Portfolio Multilanguage System
   Supports: Indonesian (id) | English (en)
   ===================================================== */

const translations = {
  id: {
    "nav.home":"Beranda","nav.about":"Tentang","nav.skills":"Keahlian",
    "nav.experience":"Pengalaman","nav.projects":"Proyek","nav.education":"Pendidikan",
    "nav.contact":"Kontak","nav.cta":"Tersedia untuk kerja",
    "hero.badge":"Terbuka untuk kerja &middot; 2026",
    "hero.greeting":"Halo, Saya Julfikar",
    "hero.role":"Fullstack <span class=\"hero__accent\">Web &amp; Mobile</span> Developer",
    "hero.lede":"Spesialis dalam pengembangan aplikasi lintas platform menggunakan <strong>Laravel</strong> dan <strong>Flutter</strong> &middot; menciptakan solusi teknologi yang inovatif dan efisien.",
    "hero.cta.view":"Lihat Proyek Saya","hero.cta.cv":"Unduh CV",
    "hero.stat.years":"Tahun pengalaman","hero.stat.projects":"Proyek terkirim",
    "about.eyebrow":"&middot; Tentang saya",
    "about.title":"Developer dengan pola pikir <em>sistem</em>.",
    "about.p1":"Saya adalah lulusan <strong>S1 Ilmu Komputer dari Universitas Bumigora</strong> dengan fokus pada intelligent systems. Saya memiliki pengalaman kuat dalam membangun ekosistem digital &middot; mulai dari arsitektur backend hingga antarmuka pengguna (UI) mobile.",
    "about.p2":"Dengan pemahaman tambahan di bidang <strong>Machine Learning</strong> dan <strong>React JS</strong>, saya berfokus pada analisis sistem yang mendalam dan pemeliharaan aplikasi jangka panjang. Saya menikmati proses mengubah masalah kompleks menjadi produk yang sederhana dan bermanfaat.",
    "about.label.based":"Lokasi","about.label.education":"Pendidikan","about.label.focus":"Fokus","about.label.languages":"Bahasa",
    "about.val.based":"Mataram, Indonesia","about.val.education":"S1 Ilmu Komputer &middot; Universitas Bumigora",
    "about.val.focus":"Laravel &middot; Flutter &middot; Analisis Sistem","about.val.languages":"Indonesia, Inggris",
    "skills.eyebrow":"&middot; Kemampuan","skills.title":"Tech stack &amp; <em>keahlian</em>",
    "skills.desc":"Teknologi yang saya gunakan sehari-hari untuk membangun produk digital yang handal, scalable, dan modern.",
    "skills.backend.title":"Backend &amp; Web","skills.backend.desc":"Optimasi kode, manajemen database MySQL, relasi Eloquent, dan RESTful API yang bersih dan terstruktur.",
    "skills.mobile.title":"Mobile &amp; Frontend","skills.mobile.desc":"Aplikasi mobile cross-platform dengan performa native, dan antarmuka web modern berbasis komponen.",
    "skills.infra.title":"Infrastruktur &amp; Tools","skills.infra.desc":"Version control, containerization, dan konfigurasi environment pada server Ubuntu maupun Windows.",
    "skills.extra.title":"Konsep Tambahan","skills.extra.desc":"Pemahaman analitis yang membantu memecahkan masalah dari sudut pandang yang berbeda.",
    "exp.eyebrow":"&middot; Jalur karir","exp.title":"Pengalaman <em>kerja</em>",
    "exp.desc":"Perjalanan profesional saya di berbagai industri &middot; dari rumah sakit, portal berita, hingga teknologi politik.",
    "exp.msukma.role":"Programmer","exp.msukma.company":"Rumah Sakit Mutiara Sukma","exp.msukma.status":"Saat Ini",
    "exp.msukma.desc":"Membangun dan mengelola Sistem Informasi Rumah Sakit serta sistem kebutuhan internal &middot; dari arsitektur backend hingga aplikasi mobile.",
    "exp.msukma.a1":"Kolaborator pada repositori GitHub utama instansi (websiteRSJMS)",
    "exp.msukma.a2":"Mengelola proses publishing, verifikasi metadata, dan versioning aplikasi medis di Google Play Console",
    "exp.msukma.a3":"Membangun sistem internal untuk operasional rumah sakit",
    "exp.rsjms.role":"Fullstack Developer","exp.rsjms.company":"RS Jiwa Mutiara Sukma &ndash; NTB","exp.rsjms.period":"Nov 2024 &ndash; Jun 2025",
    "exp.rsjms.desc":"Mengembangkan dan memelihara seluruh kebutuhan internal &middot; dari arsitektur backend hingga aplikasi mobile.",
    "exp.rsjms.a1":"Memimpin pengembangan aplikasi mobile Flutter (dirilis ke Google Play)",
    "exp.rsjms.a2":"Kolaborator pada repositori GitHub utama instansi (websiteRSJMS)",
    "exp.rsjms.a3":"Mempertahankan uptime layanan web dan database selama masa kontrak",
    "exp.berita.role":"Web Developer (Freelance)","exp.berita.company":"Portal Berita Online &ndash; NTB","exp.berita.period":"Jan &ndash; Nov 2024",
    "exp.berita.desc":"Pengembangan dan pemeliharaan platform berita online untuk kebutuhan perusahaan &middot; memastikan performa optimal untuk keterlibatan audiens.",
    "exp.berita.a1":"Mengoptimalkan performa situs untuk meningkatkan kecepatan halaman",
    "exp.berita.a2":"Mengintegrasikan fitur konten dinamis dan manajemen berita",
    "exp.berita.a3":"Memastikan responsivitas dan kompatibilitas lintas browser",
    "exp.pilkada.role":"Fullstack Developer (Kontrak)","exp.pilkada.company":"Cyber Protocol &ndash; Pilkada","exp.pilkada.period":"Jan &ndash; Nov 2024",
    "exp.pilkada.desc":"Merancang, menyediakan, dan mengelola website sistem perhitungan suara untuk seluruh calon kepala daerah partai Gerindra di Nusa Tenggara Barat.",
    "exp.pilkada.a1":"Membangun platform perhitungan suara real-time untuk Pilkada 2024",
    "exp.pilkada.a2":"Bekerja langsung dengan klien untuk memastikan kebutuhan sistem terpenuhi selama masa kontrak",
    "exp.pilkada.a3":"Mengelola deployment untuk banyak calon secara paralel",
    "proj.eyebrow":"&middot; Proyek pilihan","proj.title":"Project <em>showcase</em>",
    "proj.desc":"Studi kasus dari proyek yang pernah saya kerjakan &middot; dari sistem kesehatan, election tech, hingga aplikasi kasir.",
    "proj.hospital.tag":"Healthcare &middot; Mobile","proj.hospital.title":"Mutiara Sukma By RSMS",
    "proj.hospital.desc":"Aplikasi mobile Flutter yang telah dipublikasikan di Google Play &middot; sistem informasi rumah sakit terintegrasi untuk RS Mutiara Sukma NTB.",
    "proj.pos.tag":"Web &middot; Media","proj.pos.title":"Towa News",
    "proj.pos.desc":"Portal berita digital &middot; \"Pengeras Suara Informasi\" &middot; platform media modern untuk menyajikan berita terkini lintas kategori.",
    "proj.vecqo.tag":"Web &middot; Politik","proj.vecqo.desc":"Sistem verifikasi data pemilih &amp; pendukung untuk Pilkada 2024 &middot; alur kerja auditable dan akses berbasis peran.",
    "proj.rq.tag":"Real-time &middot; Data","proj.rq.desc":"Platform quick count real-time &amp; keamanan suara &middot; live dashboards dan visualisasi geospasial.",
    "proj.diklat.tag":"Web &middot; Pendidikan","proj.diklat.desc":"Sistem Informasi Pendidikan &amp; Pelatihan · platform diklat dengan profil, modul, dan pelacakan sertifikasi.",
    "proj.billing.tag":"Web &middot; Edukasi","proj.billing.title":"Ruang Mapres",
    "proj.billing.desc":"Platform belajar dan berproses bagi Mahasiswa Kesehatan seluruh Indonesia &middot; menyediakan materi, video pembelajaran, dan karya juara.",
    "edu.eyebrow":"&middot; Pendidikan &amp; sertifikasi","edu.title":"Akademik &amp; <em>sertifikasi</em>",
    "edu.s1.name":"S1 Ilmu Komputer","edu.s1.inst":"Universitas Bumigora",
    "edu.s1.desc":"Fokus pada intelligent systems dan pengembangan aplikasi modern lintas platform.",
    "edu.rh.name":"Red Hat OpenShift Development I","edu.rh.sub":"DO188 &middot; Introduction to Containers with Podman",
    "edu.rh.desc":"Sertifikasi resmi Red Hat untuk containerization dengan Podman dan dasar pengembangan di OpenShift.",
    "edu.ttis.name":"Microlearning: Pembentukan dan Pengelolaan TTIS","edu.ttis.sub":"Urgensi dan Dasar Pembentukan TTIS &middot; Fasilitas Pelayanan Kesehatan",
    "edu.ttis.desc":"Mengikuti microlearning pembentukan dan pengelolaan Tim Tanggap Insiden Siber (TTIS) di Fasilitas Pelayanan Kesehatan, diselenggarakan oleh Balai Pelatihan Kesehatan Cikarang (26 Agu &ndash; 01 Sep 2026).",
    "org.eyebrow":"&middot; Komunitas &amp; media","org.title":"Organisasi &amp; <em>publikasi</em>",
    "org.gdsc.name":"Google Developer Student Club","org.gdsc.role":"Divisi Media &amp; Medkominfo",
    "org.gdsc.desc":"Aktif mengelola konten dan komunikasi komunitas developer mahasiswa Universitas Bumigora.",
    "org.prog.name":"Programming Community Bumigora","org.prog.role":"Divisi PSDM",
    "org.prog.desc":"Pengembangan sumber daya anggota dan kegiatan komunitas programming di lingkungan kampus.",
    "org.bnnp.name":"Humas BNNP NTB","org.bnnp.role":"Pengelolaan Podcast",
    "org.bnnp.desc":"Mengelola produksi dan konten podcast selama magang di Badan Narkotika Nasional Provinsi NTB.",
    "contact.eyebrow":"&middot; Hubungi saya","contact.title":"Mari kita bangun <em>sesuatu</em> bersama.",
    "contact.lede":"Punya proyek, ide, atau sekadar ingin berdiskusi? Kirim pesan dan saya akan balas dalam 1 hari &middot; sering kali dalam hitungan jam.",
    "contact.name":"Nama Anda","contact.wa":"Nomor WhatsApp","contact.msg":"Ceritakan tentang proyek Anda",
    "contact.send":"Kirim via WhatsApp","contact.or":"atau email",
    "footer.tagline":"Fullstack Web &amp; Mobile Developer &middot; membangun produk yang bermakna.",
    "footer.sitemap":"Peta Situs","footer.contact":"Kontak","footer.social":"Sosial",
    "footer.rights":"&middot; 2026 Julfikar. Semua hak dilindungi.",
    "footer.built":"Dibuat dengan sepenuh hati di Mataram, Indonesia."
  },
  en: {
    "nav.home":"Home","nav.about":"About","nav.skills":"Skills",
    "nav.experience":"Experience","nav.projects":"Projects","nav.education":"Education",
    "nav.contact":"Contact","nav.cta":"Available for work",
    "hero.badge":"Open to work &middot; 2026",
    "hero.greeting":"Hi, I'm Julfikar",
    "hero.role":"Fullstack <span class=\"hero__accent\">Web &amp; Mobile</span> Developer",
    "hero.lede":"Specialist in cross-platform application development using <strong>Laravel</strong> and <strong>Flutter</strong> &middot; crafting innovative and efficient technology solutions.",
    "hero.cta.view":"View My Projects","hero.cta.cv":"Download CV",
    "hero.stat.years":"Years of experience","hero.stat.projects":"Projects delivered",
    "about.eyebrow":"&middot; About me",
    "about.title":"Developer with a <em>systems</em> mindset.",
    "about.p1":"I am a graduate of <strong>Computer Science (S1) from Universitas Bumigora</strong> with a focus on intelligent systems. I have strong experience building digital ecosystems &middot; from backend architecture to mobile user interfaces.",
    "about.p2":"With additional knowledge in <strong>Machine Learning</strong> and <strong>React JS</strong>, I focus on deep system analysis and long-term application maintenance. I enjoy turning complex problems into simple, useful products.",
    "about.label.based":"Based in","about.label.education":"Education","about.label.focus":"Focus","about.label.languages":"Languages",
    "about.val.based":"Mataram, Indonesia","about.val.education":"B.Sc. Computer Science &middot; Universitas Bumigora",
    "about.val.focus":"Laravel &middot; Flutter &middot; System Analysis","about.val.languages":"Indonesian, English",
    "skills.eyebrow":"&middot; Capabilities","skills.title":"Tech stack &amp; <em>skills</em>",
    "skills.desc":"Technologies I use daily to build reliable, scalable, and modern digital products.",
    "skills.backend.title":"Backend &amp; Web","skills.backend.desc":"Code optimization, MySQL database management, Eloquent relations, and clean structured RESTful APIs.",
    "skills.mobile.title":"Mobile &amp; Frontend","skills.mobile.desc":"Cross-platform mobile apps with native performance, and modern component-based web interfaces.",
    "skills.infra.title":"Infrastructure &amp; Tools","skills.infra.desc":"Version control, containerization, and environment configuration on Ubuntu and Windows servers.",
    "skills.extra.title":"Additional Concepts","skills.extra.desc":"Analytical understanding that helps solve problems from different perspectives.",
    "exp.eyebrow":"&middot; Career path","exp.title":"Work <em>experience</em>",
    "exp.desc":"My professional journey across various industries &middot; from hospitals, news portals, to political technology.",
    "exp.msukma.role":"Programmer","exp.msukma.company":"Rumah Sakit Mutiara Sukma","exp.msukma.status":"Present",
    "exp.msukma.desc":"Building and managing the Hospital Information System and internal operational systems &middot; from backend architecture to mobile applications.",
    "exp.msukma.a1":"Contributor to the institution's main GitHub repository (websiteRSJMS)",
    "exp.msukma.a2":"Managing the publishing process, metadata verification, and versioning of medical apps on Google Play Console",
    "exp.msukma.a3":"Building internal systems for hospital operations",
    "exp.rsjms.role":"Fullstack Developer","exp.rsjms.company":"RS Jiwa Mutiara Sukma &ndash; NTB","exp.rsjms.period":"Nov 2024 &ndash; Jun 2025",
    "exp.rsjms.desc":"Developed and maintained all internal needs &middot; from backend architecture to mobile applications.",
    "exp.rsjms.a1":"Led Flutter mobile app development (published to Google Play)",
    "exp.rsjms.a2":"Contributor to the institution's main GitHub repository (websiteRSJMS)",
    "exp.rsjms.a3":"Maintained web service and database uptime throughout the contract period",
    "exp.berita.role":"Web Developer (Freelance)","exp.berita.company":"Online News Portal &ndash; NTB","exp.berita.period":"Jan &ndash; Nov 2024",
    "exp.berita.desc":"Developed and maintained an online news platform &middot; ensuring optimal performance for audience engagement.",
    "exp.berita.a1":"Optimized site performance to improve page load speed",
    "exp.berita.a2":"Integrated dynamic content features and news management",
    "exp.berita.a3":"Ensured responsiveness and cross-browser compatibility",
    "exp.pilkada.role":"Fullstack Developer (Contract)","exp.pilkada.company":"Cyber Protocol &ndash; Election","exp.pilkada.period":"Jan &ndash; Nov 2024",
    "exp.pilkada.desc":"Designed, provisioned, and managed a vote-counting system for all Gerindra regional head candidates in West Nusa Tenggara.",
    "exp.pilkada.a1":"Built a real-time vote-counting platform for the 2024 Regional Election",
    "exp.pilkada.a2":"Worked directly with clients to ensure system requirements were met throughout the contract",
    "exp.pilkada.a3":"Managed deployments for multiple candidates in parallel",
    "proj.eyebrow":"&middot; Selected projects","proj.title":"Project <em>showcase</em>",
    "proj.desc":"Case studies from projects I've worked on &middot; from healthcare systems, election tech, to cashier apps.",
    "proj.hospital.tag":"Healthcare &middot; Mobile","proj.hospital.title":"RS Mutiara Sukma Service System",
    "proj.hospital.desc":"Mobile app and internal system for hospital operations &middot; fully integrated with Google Play Console for medical users.",
    "proj.pos.tag":"Web &middot; Media","proj.pos.title":"Towa News",
    "proj.pos.desc":"Digital news portal &middot; \"Pengeras Suara Informasi\" &middot; a modern media platform delivering up-to-date news across categories.",
    "proj.vecqo.tag":"Web &middot; Politics","proj.vecqo.desc":"Voter &amp; supporter data verification system for the 2024 Regional Election &middot; auditable workflows and role-based access.",
    "proj.rq.tag":"Real-time &middot; Data","proj.rq.desc":"Real-time quick count &amp; vote-security platform &middot; live dashboards and geospatial visualization.",
    "proj.diklat.tag":"Web &middot; Education","proj.diklat.desc":"Education &amp; Training Information System · a training platform with profiles, modules, and certification tracking.",
    "proj.billing.tag":"Web &middot; Education","proj.billing.title":"Ruang Mapres",
    "proj.billing.desc":"A learning and processing platform for Health Students across Indonesia &middot; providing materials, learning videos, and award-winning works.",
    "edu.eyebrow":"&middot; Education &amp; certification","edu.title":"Academic &amp; <em>certifications</em>",
    "edu.s1.name":"B.Sc. Computer Science","edu.s1.inst":"Universitas Bumigora",
    "edu.s1.desc":"Focused on intelligent systems and modern cross-platform application development.",
    "edu.rh.name":"Red Hat OpenShift Development I","edu.rh.sub":"DO188 &middot; Introduction to Containers with Podman",
    "edu.rh.desc":"Official Red Hat certification for containerization with Podman and fundamentals of OpenShift development.",
    "edu.ttis.name":"Microlearning: TTIS Formation & Management","edu.ttis.sub":"Urgency & Basis of TTIS Formation &middot; Healthcare Facilities",
    "edu.ttis.desc":"Completed microlearning on the formation and management of Cyber Incident Response Teams (TTIS) in healthcare facilities, organized by Balai Pelatihan Kesehatan Cikarang (26 Aug – 1 Sep 2026).",
    "org.eyebrow":"&middot; Community &amp; media","org.title":"Organizations &amp; <em>publications</em>",
    "org.gdsc.name":"Google Developer Student Club","org.gdsc.role":"Media &amp; Communications Division",
    "org.gdsc.desc":"Actively managed content and communications for the student developer community at Universitas Bumigora.",
    "org.prog.name":"Programming Community Bumigora","org.prog.role":"HR Development Division",
    "org.prog.desc":"Developed member resources and organized programming community activities on campus.",
    "org.bnnp.name":"Humas BNNP NTB","org.bnnp.role":"Podcast Management",
    "org.bnnp.desc":"Managed podcast production and content during an internship at the National Narcotics Agency of West Nusa Tenggara Province.",
    "contact.eyebrow":"&middot; Get in touch","contact.title":"Let's build <em>something</em> great.",
    "contact.lede":"Have a project, idea, or just want to chat? Send a message and I'll reply within 1 day &middot; often within hours.",
    "contact.name":"Your name","contact.wa":"WhatsApp number","contact.msg":"Tell me about your project",
    "contact.send":"Send via WhatsApp","contact.or":"or email",
    "footer.tagline":"Fullstack Web &amp; Mobile Developer &middot; building thoughtful products.",
    "footer.sitemap":"Sitemap","footer.contact":"Contact","footer.social":"Social",
    "footer.rights":"&middot; 2026 Julfikar. All rights reserved.",
    "footer.built":"Built with care in Mataram, Indonesia."
  }
};

const i18n = {
  current: localStorage.getItem("lang") || "id",
  t(key) {
    return translations[this.current][key] ?? translations["en"][key] ?? key;
  },
  apply() {
    document.documentElement.lang = this.current === "id" ? "id" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const val = this.t(el.dataset.i18n);
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const val = this.t(el.dataset.i18nPlaceholder);
      if (val !== undefined) el.placeholder = val;
    });
    const btn = document.getElementById("lang-toggle");
    if (btn) {
      const isID = this.current === "id";
      btn.querySelector(".lang-toggle__current").textContent = isID ? "ID" : "EN";
      btn.querySelector(".lang-toggle__other").textContent   = isID ? "EN" : "ID";
      btn.setAttribute("aria-label", isID ? "Switch to English" : "Ganti ke Bahasa Indonesia");
    }
  },
  toggle() {
    this.current = this.current === "id" ? "en" : "id";
    localStorage.setItem("lang", this.current);
    document.body.classList.add("lang-fade");
    setTimeout(() => {
      this.apply();
      document.body.classList.remove("lang-fade");
    }, 150);
  },
  init() {
    this.apply();
    const btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", () => this.toggle());
  }
};

document.addEventListener("DOMContentLoaded", () => i18n.init());
