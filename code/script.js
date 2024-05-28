document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        {
            image: 'slide1.jpg',
            tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>'
        },
        {
            image: 'slide2.jpg',
            tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
        },
        {
            image: 'slide3.jpg',
            tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
        },
        {
            image: 'slide4.png',
            tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
        }
    ];

    let currentSlide = 0;
    const bannerImage = document.querySelector('.banner-img');
    const tagLine = document.querySelector('.legende');

    function showSlide(index) {
        const slide = slides[index];
        bannerImage.src = './images/slideshow/' + slide.image;
        tagLine.innerHTML = slide.tagLine;
    }

    showSlide(currentSlide);

    document.querySelector('.arrow_left').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        divContainer.innerHTML = ""
        verifierSeleccione()
    });

    document.querySelector('.arrow_right').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        divContainer.innerHTML = ""
        verifierSeleccione()
    });

    const divContainer = document.querySelector('.dots')
    verifierSeleccione()


    function verifierSeleccione(){
        // boucles por chaque slide (image)
        slides.forEach((slide, index)=>{
            // console.log("on a trouves une slide ici !!! ", slide);
            // divContainer.innerHTML += "<span class='dot'></span>" 
            const span = document.createElement('span')
            span.className = "dot"
            // evaluer si le index correspond a "currentSlide", pour savoir si c'est seleccionier
            if(currentSlide === index){
                span.classList.add('dot_selected')
            }
            span.addEventListener('click', ()=>{
                currentSlide = index
                showSlide(currentSlide)
                divContainer.innerHTML = ""
                verifierSeleccione()
            })
            divContainer.append(span)
        })
    
    }
    
});


