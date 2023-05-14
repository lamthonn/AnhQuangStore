//document.querySelector('') là 1 tìm kiếm đối tượng theo class hoặc id trong ngoặc
//document.querySelectorAll('') là tìm kiếm tất cả các đối tượng theo class hoặc id trong ngoặc
//addEventListener(tên sự kiện, hàm) thêm sự kiện cho đối tượng
//classList.toggle('show') dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử


//sự kiện ẩn hiện khối lọc ẩn bằng cách sử dụng toggle để thêm và xóa class show( display = block), thực hiện luân phiên giữa việc hiện & ẩn
document.querySelector('.bo_loc').addEventListener('click', function() {
    document.querySelector('.loc_an').classList.toggle('show')
})


// sự kiện click vào icon x của khối lọc ẩn thì xóa luôn class show của khối lọc ẩn đi
document.querySelector('.thoat').addEventListener('click', function() {
    //xóa class show
    document.querySelector('.loc_an').classList.remove('show')
})

// sự kiện click vào button xem thêm, thì sẽ thêm class hide(display:none) vào button này và hiển thị thêm các sản bằng cách xóa thuộc tính style="display:none" của một số sản phẩm ở cuối cùng đi
document.querySelector('.xem_them').addEventListener('click', function() {
    this.classList = 'hide';
    // lặp qua từng đối tượng trong mảng và xóa thuộc tính style đi
    document.querySelectorAll('.san_pham_them').forEach(function(sp) {
        sp.removeAttribute('style');
    })
})