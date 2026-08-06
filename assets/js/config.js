/**
 * Single source of truth for site content.
 * To update contact info, add a project, or edit any copy — change it here.
 * render.js reads this object and builds the repeatable sections; no HTML
 * duplication needed anywhere else.
 */
window.SITE = {
  brand: "ASHLIH DEV",
  name: "Ashlih Dev",
  role: "Full Stack Product Engineer",
  tagline: "Build Digital Products That Scale.",
  metaDescription:
    "Ashlih Dev — Full Stack Product Engineer membantu bisnis, sekolah, rumah sakit, dan organisasi membangun web & mobile application yang cepat, scalable, dan mudah digunakan.",
  url: "https://ashlihdev.github.io/",
  locale: "id_ID",

  contact: {
    email: "ferijos17@gmail.com",
    whatsappDisplay: "+62 838-4001-1102",
    whatsappNumber: "6283840011102",
    github: "https://github.com/feriariyatmoko",
    linkedin: "https://id.linkedin.com/in/feriariyatmoko",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Why Me", href: "#why-me" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "Available for new projects",
    headline: "Helping Businesses Build Digital Products That Scale.",
    highlight: "Digital Products That Scale.",
    lead: "Saya membangun website, mobile app, LMS, dan sistem digital yang digunakan ribuan pengguna — dari yayasan pendidikan, rumah sakit, hingga institusi akademik.",
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Let's Talk", href: "#contact" },
    meta: [
      { icon: "users", label: "20.000+ users managed" },
      { icon: "briefcase", label: "15+ projects delivered" },
      { icon: "clock", label: "5+ years experience" },
    ],
  },

  trustedBy: {
    heading: "Trusted by institutions and organizations",
    items: [
      {
        name: "Mahad Bimbingan Islam",
        logo: "assets/images/brands-logo/mahad-bimbingan-islam.webp",
      },
      {
        name: "Rumah Sakit JIH Purwokerto",
        logo: "assets/images/brands-logo/jih.png",
      },
      { name: "Mahad Ibn Zubair", logo: null },
      { name: "FK UGM", logo: null },
      { name: "RSUP Dr. Sardjito", logo: null },
    ],
  },

  stats: [
    { value: 20000, suffix: "+", label: "Users Managed" },
    { value: 10000, suffix: "+", label: "Android Downloads" },
    { value: 15, suffix: "+", label: "Projects Delivered" },
    { value: 5, suffix: "+", label: "Years Experience" },
  ],

  services: [
    {
      icon: "code",
      title: "Website Development",
      description:
        "Website company profile hingga aplikasi web kompleks yang cepat, aman, dan mudah dikembangkan.",
      tags: ["Laravel", "Vue", "React"],
    },
    {
      icon: "mobile",
      title: "Mobile Apps",
      description:
        "Aplikasi mobile lintas platform dengan performa native untuk Android dan iOS.",
      tags: ["React Native", "Expo", "Android", "iOS"],
    },
    {
      icon: "graduation",
      title: "Learning Management System",
      description:
        "Platform pembelajaran online lengkap dengan kelas, kuis, sertifikat, dan pembayaran otomatis.",
      tags: ["Online Course", "Quiz", "Certificate", "Payment Gateway"],
    },
    {
      icon: "hospital",
      title: "Hospital Information System",
      description:
        "Sistem informasi dan aplikasi layanan pasien untuk rumah sakit dan fasilitas kesehatan.",
      tags: ["Patient App", "Scheduling", "Digital Records"],
    },
    {
      icon: "book",
      title: "Education Platform",
      description:
        "Sistem digital untuk sekolah dan institusi pendidikan, dari akademik hingga administrasi.",
      tags: ["Academic System", "Admin Dashboard"],
    },
    {
      icon: "sparkles",
      title: "AI Integration",
      description:
        "Menghubungkan produk Anda dengan kecerdasan buatan untuk otomatisasi dan layanan pelanggan.",
      tags: ["OpenAI API", "Automation", "Chatbot"],
    },
  ],

  projects: [
    {
      name: "Mahad Bimbingan Islam",
      tag: "Learning Management System",
      description:
        "Platform Learning Management System untuk pembelajaran Islam secara online, lengkap dengan aplikasi mobile pendamping.",
      role: "Full Stack Developer",
      tech: "Laravel, Vue, MySQL, React Native",
      challenge:
        "Mengelola ribuan santri lintas angkatan dengan kebutuhan course, ujian, dan pembayaran yang berjalan bersamaan tanpa mengganggu pengalaman belajar.",
      solution:
        "Membangun LMS modular (course, video learning, quiz, certificate) terintegrasi payment gateway dan dashboard admin, plus aplikasi mobile agar peserta bisa belajar dari mana saja.",
      features: [
        "Course & Video Learning",
        "Quiz & Certificate",
        "Payment Gateway",
        "Mobile App",
        "Dashboard Admin",
      ],
      impact: { value: "20.000+", label: "pengguna terkelola" },
      visual: {
        type: "browser+phone",
        image: "assets/projects/mahad.webp",
        phoneImage: "assets/projects/mahad_app.webp",
      },
      details: [
        {
          image: "assets/projects/payment_gateway.webp",
          alt: "Halaman payment gateway Mahad Bimbingan Islam",
        },
        {
          image: "assets/projects/invoice.webp",
          alt: "Dashboard invoice dan pembayaran Mahad Bimbingan Islam",
        },
      ],
    },
    {
      name: "Mahad Ibn Zubair",
      tag: "Online Learning Platform",
      description:
        "Platform pembelajaran online dengan sistem ranking untuk memacu keaktifan dan konsistensi belajar peserta.",
      role: "Full Stack Developer",
      tech: "Laravel, JavaScript, MySQL",
      challenge:
        "Peserta membutuhkan motivasi tambahan agar konsisten mengikuti materi dan mengerjakan kuis setiap pekan.",
      solution:
        "Merancang sistem ranking otomatis berdasarkan kehadiran dan nilai kuis, dipadukan dengan video materi dan sertifikat kelulusan.",
      features: ["Ranking", "Video", "Quiz", "Certificate"],
      impact: { value: "12+", label: "angkatan berjalan" },
      visual: {
        type: "browser",
        image: "assets/projects/aishah.webp",
      },
    },
    {
      name: "RS JIH Purwokerto",
      tag: "Hospital Mobile App",
      description:
        "Aplikasi mobile rumah sakit yang berfokus pada pengalaman pasien dan kemudahan akses layanan digital.",
      role: "Mobile App Partner Developer",
      tech: "React Native, REST API",
      challenge:
        "Pasien membutuhkan cara yang lebih cepat untuk mengakses jadwal dokter dan layanan rumah sakit tanpa antre manual.",
      solution:
        "Mengembangkan aplikasi mobile dengan alur reservasi dan informasi layanan yang sederhana bagi pasien dari berbagai kalangan usia.",
      features: ["Patient Experience", "Digital Service Access"],
      impact: { value: "1", label: "aplikasi rumah sakit aktif" },
      visual: {
        type: "placeholder",
        placeholderLabel: "RS JIH Purwokerto — App Preview",
      },
    },
    {
      name: "FK UGM & RSUP Dr. Sardjito",
      tag: "Academic Application",
      description:
        "Partner pengembangan aplikasi untuk program pendidikan sekolah subspesialis.",
      role: "Application Developer Partner",
      tech: "Laravel, MySQL",
      challenge:
        "Proses akademik program subspesialis memerlukan sistem terpusat yang menghubungkan peserta didik, pengajar, dan administrasi.",
      solution:
        "Membangun sistem akademik yang menyederhanakan pengelolaan data peserta didik dan proses administratif program.",
      features: ["Academic System", "Administration"],
      impact: { value: "1", label: "sistem akademik terpakai" },
      visual: {
        type: "placeholder",
        placeholderLabel: "FK UGM & RSUP Dr. Sardjito — App Preview",
      },
    },
  ],

  stack: [
    { title: "Backend", items: ["Laravel", "PHP", "MySQL"] },
    { title: "Frontend", items: ["Vue", "React", "Tailwind CSS", "JavaScript"] },
    { title: "Mobile", items: ["React Native", "Expo", "Android", "iOS"] },
    { title: "Cloud", items: ["AWS", "Cloudflare", "GitHub"] },
    { title: "AI", items: ["OpenAI API", "MCP", "Automation"] },
  ],

  process: [
    { title: "Discovery", description: "Memahami tujuan bisnis dan kebutuhan pengguna." },
    { title: "Planning", description: "Menyusun scope, arsitektur, dan timeline yang jelas." },
    { title: "Development", description: "Membangun produk secara iteratif dan terukur." },
    { title: "Testing", description: "Memastikan kualitas lewat pengujian menyeluruh." },
    { title: "Deployment", description: "Merilis produk dengan aman ke lingkungan produksi." },
    { title: "Maintenance", description: "Mendukung dan mengembangkan produk pasca rilis." },
  ],

  whyMe: [
    {
      icon: "check",
      title: "Real-world Experience",
      description: "Saya membangun aplikasi yang benar-benar digunakan ribuan pengguna.",
    },
    {
      icon: "layers",
      title: "Scalable Architecture",
      description: "Mendesain sistem agar mudah berkembang seiring pertumbuhan bisnis.",
    },
    {
      icon: "chat",
      title: "Fast Communication",
      description: "Komunikasi cepat, jelas, dan responsif di setiap tahap proyek.",
    },
    {
      icon: "handshake",
      title: "Long-term Partnership",
      description: "Saya lebih suka membangun hubungan jangka panjang daripada sekadar menyelesaikan proyek.",
    },
    {
      icon: "code2",
      title: "Clean Code",
      description: "Kode mudah dirawat, dibaca, dan dikembangkan oleh tim mana pun.",
    },
    {
      icon: "target",
      title: "Business Mindset",
      description: "Tidak hanya membuat aplikasi, tetapi juga memikirkan solusi bisnis.",
    },
  ],

  // Placeholder testimonials — swap with real client quotes when available.
  testimonials: [
    {
      quote:
        "Sistem LMS yang dibangun sangat membantu operasional pembelajaran kami untuk ribuan peserta setiap angkatan.",
      name: "Tim Akademik",
      role: "Yayasan Pendidikan Islam",
    },
    {
      quote:
        "Komunikasi selama pengerjaan sangat jelas dan hasil akhirnya sesuai kebutuhan lapangan kami.",
      name: "Tim Pengembangan",
      role: "Institusi Kesehatan",
    },
    {
      quote:
        "Aplikasi mobile-nya stabil dan mudah digunakan oleh pengguna dari berbagai kalangan usia.",
      name: "Tim Produk",
      role: "Mitra Pengembangan Aplikasi",
    },
  ],

  faq: [
    {
      question: "Berapa lama pengerjaan proyek?",
      answer:
        "Tergantung kompleksitas. Website profil umumnya 1-2 minggu, sistem web/LMS 4-8 minggu, dan aplikasi mobile 6-10 minggu. Timeline detail diberikan setelah tahap discovery.",
    },
    {
      question: "Apakah bisa maintenance setelah proyek selesai?",
      answer:
        "Bisa. Tersedia paket maintenance bulanan untuk update, perbaikan bug, dan pengembangan fitur baru pasca peluncuran.",
    },
    {
      question: "Apakah bisa membuat mobile app?",
      answer:
        "Bisa, menggunakan React Native/Expo untuk Android dan iOS dengan satu basis kode, atau native bila dibutuhkan.",
    },
    {
      question: "Apakah bisa integrasi payment gateway?",
      answer:
        "Bisa. Sudah berpengalaman mengintegrasikan payment gateway seperti Xendit untuk pembayaran kelas, invoice, dan transaksi lainnya.",
    },
    {
      question: "Apakah bisa membuat LMS (Learning Management System)?",
      answer:
        "Bisa. Salah satu proyek utama saya adalah LMS Mahad Bimbingan Islam yang melayani lebih dari 20.000 pengguna dengan course, quiz, sertifikat, dan payment gateway.",
    },
  ],

  cta: {
    title: "Let's Build Something Great Together.",
    lead: "Punya ide produk digital untuk bisnis, sekolah, atau organisasi Anda? Mari diskusikan kebutuhannya.",
    buttonLabel: "Start Your Project",
  },
};
