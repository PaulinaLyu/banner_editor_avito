form.addEventListener('input', () => {
    const validForm = formElements.every(elem => elem.value);
    alertWarning.style.display = validForm ? 'none' : '';
});

formImg.addEventListener('change', () => {
    function loadImgAsBase64(url, callback) {
        let canvas = document.createElement('CANVAS');
        let img = document.createElement('img');
        img.setAttribute('crossorigin', 'anonymous');
        img.src = 'https://cors-anywhere.herokuapp.com/' + url;
        
        img.onload = () => {
        canvas.height = img.height;
        canvas.width = img.width;
        let context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL('image/png');
        canvas = null;
        callback(dataURL);
        };
    }
        
    let url = formImg.value;
        
    loadImgAsBase64(url, (dataURL) => {
        bannerImg.src = dataURL;
    });
});

formColor.addEventListener('change', () => bannerPreview.style.backgroundColor = formColor.value);
formLink.addEventListener('change', () => bannerLink.href = formLink.value);
formTextarea.addEventListener('change', () => bannerText.innerHTML = formTextarea.value);