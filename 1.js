document.querySelectorAll('.header-sections').forEach(section => {
  section.addEventListener('click', () => {
    const text = section.textContent.trim().toLowerCase();

    let id = '';
    if (text === 'home') id = 'home';
    else if (text === 'faqs') id = 'faqs';
    else if (text === 'services') id = 'services';
    else if (text === 'about') id = 'about';

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
