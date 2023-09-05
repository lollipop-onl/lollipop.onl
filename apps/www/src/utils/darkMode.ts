export const applyTheme = () => {
  const isDark = localStorage.theme
    ? localStorage.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;

  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
};

export const toggleTheme = () => {
  localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';

  applyTheme();
};
