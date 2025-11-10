
setTimeout(() => {
    const teas = document.getElementById('menu1');
    const ourOg = document.getElementById('menu2');
    const boxNBag = document.getElementById('menu3');
    const boxNGift = document.getElementById('menu4');
    const access = document.getElementById('menu5');


        const dropDown = (e) => {
            if (e.target.id === "nav_1_btn") {
                access.classList.remove("show")
                boxNGift.classList.remove("show")
                boxNBag.classList.remove("show")
                ourOg.classList.remove("show")
                teas.classList.toggle("show")
            } else if (e.target.id === "nav_2_btn") {
                access.classList.remove("show")
                boxNGift.classList.remove("show")
                boxNBag.classList.remove("show")
                ourOg.classList.toggle("show")
                teas.classList.remove("show")
            } else if (e.target.id === "nav_3_btn") {
                access.classList.remove("show")
                boxNGift.classList.remove("show")
                boxNBag.classList.toggle("show")
                ourOg.classList.remove("show")
                teas.classList.remove("show")
            } else if (e.target.id === "nav_4_btn") {
                access.classList.remove("show")
                boxNGift.classList.toggle("show")
                boxNBag.classList.remove("show")
                ourOg.classList.remove("show")
                teas.classList.remove("show")
            } else if (e.target.id === "nav_5_btn") {
                access.classList.toggle("show")
                boxNGift.classList.remove("show")
                boxNBag.classList.remove("show")
                ourOg.classList.remove("show")
                teas.classList.remove("show")
            } else {
                access.classList.remove("show")
                boxNGift.classList.remove("show")
                boxNBag.classList.remove("show")
                ourOg.classList.remove("show")
                teas.classList.remove("show")
            }
        }

        document.body.addEventListener('click', dropDown)
    

//  hamburger - sidemenu
const hamMenu = document.getElementById('menu-trigger');
const sideMenu = document.getElementById('side-menu');
const sideMenuO = document.querySelector('.side-menu-design');
const closeMenu = document.getElementById('menu-close');

if (hamMenu){
hamMenu.addEventListener('click', function () {
  sideMenu.classList.add('show-menu');
  sideMenuO.style.opacity = "1";
});
}

if (closeMenu){
closeMenu.addEventListener('click',function(){
    sideMenu.classList.remove('show-menu');
    sideMenuO.style.opacity = "0"
})
}
}
 ,100);