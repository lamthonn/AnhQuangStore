document.querySelector('.bo_loc').addEventListener('click', function() {
    document.querySelector('.loc_an').classList.toggle('show')
})

document.querySelector('.thoat').addEventListener('click', function() {
    document.querySelector('.loc_an').classList.remove('show')
})