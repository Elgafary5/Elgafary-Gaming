document.addEventListener('DOMContentLoaded', () => {
  initScrollTopButton();
  loadPosts();
});

async function loadPosts() {
  try {
    const res = await fetch('/content/posts.json');
    const data = await res.json();

    if (!data.posts || !Array.isArray(data.posts)) {
      console.error('posts.json format is wrong');
      return;
    }

    initCards(data.posts);
  } catch (err) {
    console.error('Error loading posts:', err);
  }
}

function initCards(posts) {
  const container = document.getElementById('cards-container');
  if (!container) return;

  container.innerHTML = '';

  posts.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = `card ${item.featured ? 'featured' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="img-wrapper">
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
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '⬆';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle(
      'show',
      document.documentElement.scrollTop > 300
    );
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
