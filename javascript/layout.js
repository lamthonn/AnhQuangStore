const diachi = document.querySelector('.dia_chi')
const list_dh = document.querySelector('.fa-bars')
const exit = document.querySelector('.fa-xmark')
let isShow = false;

diachi.addEventListener('click',function (){
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.dc_chi_tiet').style.display = 'block';
    }
    else {
        document.querySelector('.dc_chi_tiet').style.display = 'none';
    }
});

list_dh.addEventListener('click',function(){
    document.querySelector('.mobile_dieu_huong').style.display = 'block';
})

exit.addEventListener('click',function() {
    document.querySelector('.mobile_dieu_huong').style.display = 'none';
})