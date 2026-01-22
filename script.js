document.addEventListener('DOMContentLoaded', () => {
  initScrollTopButton();
  initCards();
});

document.addEventListener('DOMContentLoaded', () => {
  initScrollTopButton();
  loadPosts();
});

async function loadPosts() {
  try {
    const res = await fetch('/content/posts.json');
    const data = await res.json();

    initCards(data.posts);
  } catch (err) {
    console.error('Error loading posts:', err);
  }
}

function initCards(cardsData) {
  const container = document.getElementById('cards-container');
  if (!container) return;

  container.innerHTML = '';

  cardsData.forEach((item, index) => {
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

