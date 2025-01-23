 

var typed = new Typed('.type', {
    strings: ['Art', 'Photo', '3D Image', 'Technology Related',],
    typeSpeed: 100,
    loop: true

  });

 




let sections = document.querySelectorAll('section');

window.onscroll = () =>{

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){

            sec.classList.add('show-animate');

        }

        else{

            sec.classList.remove('show-animate');
        }
    })
}