const switcher = document.querySelector('#language');
let language = 'zh';
switcher.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    element.textContent = element.dataset[language].replaceAll('\\n', '\n');
  });
  switcher.textContent = language === 'zh' ? 'EN' : '中';
  switcher.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  document.title = language === 'zh' ? '陈祺新 · 研究与代码' : '陈祺新 · Research & Code';
});
