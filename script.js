const languageToggle = document.querySelector('#languageToggle');
const yearLabel = document.querySelector('#year');

yearLabel.textContent = new Date().getFullYear();

languageToggle.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'zh-CN' ? 'en' : 'zh-CN';
  document.documentElement.lang = nextLanguage;
  document.querySelectorAll('[data-zh][data-en]').forEach((element) => {
    element.textContent = element.dataset[nextLanguage === 'en' ? 'en' : 'zh'];
  });
  languageToggle.innerHTML = nextLanguage === 'en' ? '中文 <span>↗</span>' : 'EN <span>↗</span>';
});
