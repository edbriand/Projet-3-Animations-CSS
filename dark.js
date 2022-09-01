function addDarkThemeClass(element) {
    if (!element.classList.contains("dark")) {
      element.classList.toggle("dark");
    }
}

function removeDarkThemeClass(element) {
    if (element.classList.contains("dark")) {
      element.classList.toggle("dark");
    }
}

function initToggleSwitches(checkboxes, isDarkMode) {
  Array.from(checkboxes).forEach(checkbox => checkbox.checked = isDarkMode);
}

function initTheme() {
  const currentTheme = localStorage.getItem("theme");
  const checkboxes = document.getElementsByClassName("btn-dark__checkbox");
  const documentElement = document.documentElement;

  const isDarkMode = currentTheme === "dark";
  isDarkMode ? addDarkThemeClass(documentElement) : removeDarkThemeClass(documentElement);
  initToggleSwitches(checkboxes, isDarkMode);
}

function updateLocalStorage(isDarkMode) {
  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function toggleDark() {
  const documentElement = document.documentElement;
  documentElement.classList.toggle("dark");

  const isDarkMode = documentElement.classList.contains("dark");
  updateLocalStorage(isDarkMode);
}

initTheme();
