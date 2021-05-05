const ham = document.querySelector('.am');
const links = document.querySelector('.links');

ham.addEventListener('click' , () =>{

    ham.classList.toggle('rot');
    links.classList.toggle('linked');

});



gsap.from('.h1' , {duration: 2 ,y:-140, opacity: 0 });
gsap.from('.h3' , { y:-30, opacity: 0 , duration :2 ,delay:1});
gsap.from('.logo' , {duration:1.5 , opacity: 0 , width:0 , x: -500 ,delay:.5});


gsap.from(".ane" , {duration:1 , y: 40 ,opacity : 0.5,scrollTrigger: ".ane"});
gsap.from(".intro" , {duration:1 , x: 540 ,opacity : 0,scale: 0,scrollTrigger: ".intro"});


gsap.from(".why" , {duration:1 , x:-50 ,opacity : 0,scale: 0,scrollTrigger: ".why"});
 gsap.from(".card" , {duration:1 , x:-50 ,opacity : 0,scale: 0,scrollTrigger: ".nd" ,stagger: .35});
 gsap.from(".whey" , {duration:1.5 , y:-150,scale:0 ,opacity:0 , ease: Power3.easeOut ,scrollTrigger: ".whey"});