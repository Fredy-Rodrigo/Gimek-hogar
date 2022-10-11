/* MENU RESPONSIVE */
let menuIcon = document.getElementById('menu-icon')
let menu = document.getElementById('menu')

menuIcon.addEventListener('click', () => {
    window.visualViewport.width<=800 && 
    menu.classList.toggle('menu-off');
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