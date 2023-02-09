/**
 * set a given theme/color scheme
 * @param themeName name of the theme to set
 */
const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName); /** set theme in local storage */
  document.documentElement.className = themeName; 
};

/** toggle between light and dark theme */
const toggleTheme = () => {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
};

/** Immediately invoked function to set the theme on initial load */
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("theme-toggler").checked = true;
  } else {
    setTheme("theme-light");
    document.getElementById("theme-toggler").checked = false;
  }
})();
