// copy menu for mobile
function copuMenu() {
    // copy inside .dpt-category to .departments
    let dptCategory = document.querySelector('.dpt-cat');
    let dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    let topNav = document.querySelector('.header-top .wrapper');
    let topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copuMenu();
// show mobile menu
const menuBtn = document.querySelector('.trigger'),
    closetBtn = document.querySelector('.t-close'),
    addClass = document.querySelector('.site');
menuBtn.addEventListener('click', function() {
    addClass.classList.toggle('showmenu')
});
closetBtn.addEventListener('click', function() {
    addClass.classList.remove('showmenu')
})     

// show sub menu on mobile
const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}


// swiper slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });