btnPNG.addEventListener('click', () => {
    html2canvas(bannerPreview)
        .then(canvas => {
            canvas.toBlob(function(blob) {
                saveAs(blob, "banner.png");
            });
        });
});