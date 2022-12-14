/* MENU RESPONSIVE */
let menuIcon = document.getElementById('menu-icon')
let menu = document.getElementById('menu')

menuIcon.addEventListener('click', () => {
    window.visualViewport.width<=800 && 
    menu.classList.toggle('menu-off');
})

/* FOOTER ENVIAR MENSAJE POR WSP */

let message = document.getElementById('message');
let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let wspMessage = message.value.split(' ').join('%20');
    let url = `https://wa.me/5491169620164?text=${wspMessage}`;
    window.open(url);
})

/* SLIDER OPINIONES */

window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider'), {
		slidesToShow: 1,
		slidesToScroll: 1,
        draggable: true,
		dots: '.dots',
		arrows: {
			prev: '.glider-opinion-prev',
			next: '.glider-opinion-next'
		},
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 650,
                settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            }
        ]
	});
});

/* SLIDER PRODUCTOS MAS VENDIDOS */

window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider-products'), {
		slidesToShow: 1,
		slidesToScroll: 1,
        draggable: true,
		dots: '.dots-products',
		arrows: {
			prev: '.glider-prod-prev',
			next: '.glider-prod-next'
		},
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 650,
                settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            }
        ]
	});
});

/* SLIDER OFERTAS */

window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider-offers'), {
		slidesToShow: 1,
		slidesToScroll: 1,
        draggable: true,
		dots: '.dots-offers',
		arrows: {
			prev: '.glider-offer-prev',
			next: '.glider-offer-next'
		},
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 650,
                settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            }
        ]
	});
});

/* SLIDER CATEGORIAS */

window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider-categories'), {
		slidesToShow: 1,
		slidesToScroll: 1,
        draggable: true,
		dots: '.dots-categories',
		arrows: {
			prev: '.glider-cat-prev',
			next: '.glider-cat-next'
		},
        responsive: [
            {
                breakpoint: 0,
                settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            },{
                breakpoint: 600,
                settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            }
            ,{
                breakpoint: 900,
                settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            }
            ,{
                breakpoint: 1090,
                settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
                }
            }
        ]
	});
});