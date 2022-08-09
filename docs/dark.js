var currentTheme = localStorage.getItem("theme");
var checkboxes = document.getElementsByClassName("btn-dark__checkbox");
var element = document.documentElement;

if (currentTheme == "dark") {
  if (!element.classList.contains("dark")) {
    element.classList.toggle("dark");
  }
  Array.from(checkboxes).forEach((checkbox) => {
    checkbox.checked = true;
    console.log("dark", checkbox);
  });
} else if (currentTheme == "light") {
  if (element.classList.contains("dark")) {
    element.classList.toggle("dark");
  }
  Array.from(checkboxes).forEach((checkbox) => {
    checkbox.checked = false;
    console.log("light", checkbox);
  });
}

function toggleDark() {
  element.classList.toggle("dark");

  if (element.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
