const btn = document.querySelector(".btn-dark");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  if (!document.body.classList.contains("dark")) {
    element.classList.toggle("dark");
  }
} else if (currentTheme == "light") {
  if (document.body.classList.contains("dark")) {
    element.classList.toggle("dark");
  }
}

function toggleDark() {
  var element = document.documentElement;
  element.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
