const form = document.querySelector('.form'),
    alertWarning = document.querySelector('.alert'),
    formImg = document.querySelector('#formImg'),
    formColor = document.querySelector('#formColor'),
    formTextarea = document.querySelector('#formTextarea'),
    formLink = document.querySelector('#formLink'),
    bannerPreview = document.querySelector('#bannerPreview'),
    bannerLink = document.querySelector('#bannerLink'),
    bannerText = document.querySelector('#bannerText'),
    bannerImg = document.querySelector('#bannerImg'),
    btnPNG = document.querySelector('#btnPNG');

const formElements = [...form.elements]
    .filter(elem => elem.tagName !== 'BUTTON');