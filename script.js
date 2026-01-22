document.addEventListener('DOMContentLoaded', () => {
  initScrollTopButton();
  initCards();
});

const cardsData = [
  {
    "id": "filmora15",
    "title": "تفعيل Filmora 15 مجانا",
    "description": "شرح تفعيل Filmora 15 مجانا مدى الحياة مع استعراض جميع المميزات",
    "image": "images/filmora.jpg",
    "link": "filmora15.html",
    "featured": true,
    "badge": "مجاني"
  },
  {
    "id": "discord",
    "title": "تشغيل ديسكورد في مصر",
    "description": "شرح تشغيل Discord بعد حظره في مصر باستخدام GoodbyeDPI بدون VPN نهائيًا.",
    "image": "images/discord.jpg",
    "link": "discord.html",
    "featured": true,
    "badge": "حصري"
  },
  {
    "id": "gemini-pro",
    "title": "Gemini Pro مجانًا",
    "description": "شرح تشغيل Gemini Pro مع توليد الصور Nano Banana والفيديو Veo 3 بجميع مميزات البرو.",
    "image": "images/gemini-pro.jpg",
    "link": "gemini-pro.html",
    "featured": true,
    "badge": "جديد"
  },
  {
    "id": "chatgpt-pro",
    "title": "ChatGPT Pro مجاناً",
    "description": "شرح استخدام ChatGPT PRO مجاناً مع أقوى المميزات للبرمجة وصناعة المحتوى.",
    "image": "images/chatgpt-thumb.jpg",
    "link": "chatgpt_pro.html",
    "featured": true,
    "badge": "AI"
  },
  {
    "id": "capcut-pro",
    "title": "CapCut Pro Free",
    "description": "شرح استخدام CapCut Pro مجانا على الكمبيوتر بطريقة سهلة وجديدة 2026.",
    "image": "images/1.jpg",
    "link": "capcut_pc.html",
    "featured": false,
    "badge": "2026"
  },
  {
    "id": "zekaa-vip",
    "title": "Zekaa VIP",
    "description": "برنامج Zekaa VIP للكمبيوتر.",
    "image": "https://img.youtube.com/vi/iBCuRc0jHvk/maxresdefault.jpg",
    "link": "zekaa_vip.html",
    "featured": false
  },
  {
    "id": "stremio",
    "title": "Stremio",
    "description": "برنامج لمشاهدة الأفلام والمسلسلات مجاناً.",
    "image": "images/stremio-card.jpg",
    "link": "stremio_details.html",
    "featured": false
  }
];

function initCards() {
  const container = document.getElementById('cards-container');
  if (!container) return; // Exit if not on the main page

  cardsData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = `card ${item.featured ? 'featured' : ''}`;

    // Stagger animation delay
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="img-wrapper" style="overflow: hidden;">
          <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" class="card-btn">شاهد التفاصيل</a>
      </div>
    `;

    container.appendChild(card);
  });
}

function initScrollTopButton() {
  // Create button dynamically
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '⬆';
  btn.title = 'Go to top';
  document.body.appendChild(btn);

  // Show/Hide logic
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  // Click logic
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
