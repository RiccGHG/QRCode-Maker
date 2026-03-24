function gen() {
  const input = document.querySelector("textarea");
  if (!input.value) {
    input.style.outline = "2px solid red";
    setTimeout(() => {
      input.style.outline = "";
    }, 1000 * 3);
    return;
  }
  QRCode.toDataURL(input.value, (err, url) => {
    if (err) return console.error(err);
    let img = document.getElementById("img");
    img.src = url;
    img.hidden = false;
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.disabled = false;
    const downloader = document.getElementById("download");
    downloader.href = url;
  });
}
function download() {
  const download = document.getElementById("download");
  download.click();
  console.log("click");
}
const root = document.documentElement;
const txtTheme = document.getElementById("txtThemeBtn");
const imgTheme = document.getElementById("imgThemeBtn");
function getTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDark ? "dark" : "light";
}
/**@type {"dark" | "light"} */
let currentTheme = getTheme();
function showThemeBtn() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    txtTheme.hidden = false;
    imgTheme.hidden = true;
  } else {
    txtTheme.hidden = true;
    imgTheme.hidden = false;
  }
}

function setThemBtn() {
  if (currentTheme === "light") {
    txtTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" 
    height="24" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
    class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    imgTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" 
    height="24" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
    class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    txtTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
  class="feather feather-sun">
  <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line>
  <line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line>
  <line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    imgTheme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
  class="feather feather-sun">
  <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line>
  <line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line>
  <line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

showThemeBtn();
setThemBtn();
window.matchMedia("(max-width: 768px)").addEventListener("change", (e) => {
  showThemeBtn();
});

[txtTheme, imgTheme].forEach((btn) => btn.addEventListener("click", (e) => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  setThemBtn();
  root.classList.remove("dark", "light");
  root.classList.add(currentTheme)
}));
