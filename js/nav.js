const navSlide =() =>{
    const burger = document.querySelector('.burger');
    const nav= document.querySelector('.nav-links');
//     const cal= document.querySelector('.calendar');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
//         cal.classList.toggle('cal-hide');
    });

    //links
    navLinks.forEach((link,index) => {
        console.log(index/7);
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s';


    });
}

navSlide();
