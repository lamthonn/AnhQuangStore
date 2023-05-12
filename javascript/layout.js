const diachi = document.querySelector('.dia_chi')
const list_dh = document.querySelector('.fa-bars')
const exit = document.querySelector('.fa-xmark')
const luxe = document.querySelector('.luxe')
const htkh = document.querySelector('.htkh')
const lien_ket = document.querySelector('.lien_ket')
const chinh_sach = document.querySelector('.chinh_sach')
const dndk = document.querySelector('.fa-user')

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

luxe.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.luxe_main').style.display = 'block';
    }
    else {
        document.querySelector('.luxe_main').style.display = 'none';
    } 
})

htkh.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.htkh_main').style.display = 'block';
    }
    else {
        document.querySelector('.htkh_main').style.display = 'none';
    }
})

lien_ket.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.list_lk').style.display = 'block';
    }
    else {
        document.querySelector('.list_lk').style.display = 'none';
    }   
})

chinh_sach.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.list_cs').style.display = 'block';
    }
    else {
        document.querySelector('.list_cs').style.display = 'none';
    }
})

dndk.addEventListener('click',function() {
    this.isShow = !this.isShow;
    if(this.isShow == true){
        document.querySelector('.user').style.display = 'block';
    }
    else {
        document.querySelector('.user').style.display = 'none';
    }
})