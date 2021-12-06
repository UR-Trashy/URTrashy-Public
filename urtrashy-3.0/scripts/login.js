window.addEventListener("load", setTheme());

function logIn() {
  localStorage.setItem("Logged in", 1);
}

function setTheme() {
  if (localStorage.getItem("Theme") == null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      localStorage.setItem("Theme", "Dark");
    else localStorage.setItem("Theme", "Light");
  }

  if (localStorage.getItem("Theme") == "Dark") {
    document
      .getElementById("current-style")
      .setAttribute("href", "styles/login-dark.css"); //need to switch to dark, but test for now
  } else {
    document
      .getElementById("current-style")
      .setAttribute("href", "styles/login-light.css");
  }
}
