var content_div = document.querySelector('.tb-recommend-content-item')
content_div.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'pink'
})
content_div.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#f7f9fa'
})