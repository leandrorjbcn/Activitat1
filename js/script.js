const modal = document.querySelector('.myModal');
const previews = document.querySelectorAll('.media-element img');
const original = document.querySelector('.full-img');
const span = document.getElementsByClassName("close")[0];
const body = document.getElementsByTagName("body")[0];

previews.forEach(preview => { // array amb totes les imatges
    preview.addEventListener('click', () => {   //quan es clica en una imatge
        const newOriginalImg = preview.getAttribute('src');
        const newSrc = newOriginalImg.replace("q=80&w=400","q=320&w=1600"); //canvio la mida de la imatge exhibida en el modal
        original.src =`${newSrc}`; 
                
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    })

    span.onclick = function() { //botó per tancar el modal
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) { // al clicar fora del modal, tanca el modal
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
})