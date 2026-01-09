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