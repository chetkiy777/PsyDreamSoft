var allBtn = document.querySelectorAll('button')
allBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        this.parentElement.remove()
    })
})