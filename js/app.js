const themeToggle = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const defaultTheme = localStorage.getItem('theme');

if(defaultTheme) {
  document.documentElement.setAttribute('data-theme', defaultTheme);

  if(defaultTheme === 'dark') {
    themeToggle.checked = true;
  }
}

function switchTheme (e) {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

themeToggle.addEventListener('change', switchTheme, false);