function gen() {
    QRCode.toDataURL("hi", (err, url) => {
        if (err) return console.error(err);
        document.getElementById("img").src = url
    })
}