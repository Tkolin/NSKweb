class Carousel {
    constructor(elementId) {
        this.carousel = document.getElementById(elementId);
        this.initCarousel();
    }

    initCarousel() {
        this.carousel.addEventListener('slide.bs.carousel', function () {
            document.querySelector('.carousel-inner').classList.add('fade-out');
        });

        this.carousel.addEventListener('slid.bs.carousel', function () {
            document.querySelector('.carousel-inner').classList.remove('fade-out');
            document.querySelector('.carousel-inner').classList.add('fade-in');
            setTimeout(function () {
                document.querySelector('.carousel-inner').classList.remove('fade-in');
            }, 1000);
        });
    }
}

export default Carousel;
