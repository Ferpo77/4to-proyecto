document.addEventListener("DOMContentLoaded", function(){
    iniciarapp();
});

function scrollnav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccionscroll= e.target.attributes.href.value;
            const seccion= document.querySelector(seccionscroll);
            seccion.scrollIntoView({behavior: "smooth"})
        })
    });
}    


function iniciarapp() {
    creargaleria();
    scrollnav();
    navegacionfija();

}

function navegacionfija() {
    const body=document.querySelector('body')
    const barra= document.querySelector('.header')
    const sobrefestival= document.querySelector('.sobre-festival')
    window.addEventListener('scroll',function(){
        const eye= sobrefestival.getBoundingClientRect().bottom
        if (eye <0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');

        }else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
        
    });

}

function creargaleria() {
    const galeria= document.querySelector('.galeria-imagenes');
    for(let i =1; i<= 12;i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">

            <img src="build/img/thumb/${i}.jpg" alt="imagen vocalista"></img>
        `

        imagen.onclick =function(){
            mostrarimagen(i);
        }
        galeria.appendChild(imagen);
    }
}


function mostrarimagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = 
        `
            <source srcset="build/img/grande/${id}.webp" type="image/webp">

            <img src="build/img/grande/${id}.jpg" alt="imagen vocalista"></img>
        `;

    //crea el overlay de la imagen
    const overlay= document.createElement('overlay');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay-galeria');
    overlay.onclick =function(){
        const body=document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //cerrar modal btn
    const btn= document.createElement('p');
    btn.textContent='X';
    btn.classList.add('btn-cerrar');
    btn.onclick=function(){ 
        const body=document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();

    }
    //añade el boton al overlay donde se vera la imagen y el boton
    overlay.appendChild(btn);
    



    //añade al html
    const body=document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

