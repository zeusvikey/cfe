let search = document.querySelector('.search-box');
document.querySelector('#search-icon').oneclick = () => {
    search.classList.toggle('active')
}



let header =document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shdow', window.scrollY.toString> 0);
});