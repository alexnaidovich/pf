const w = document.querySelectorAll('.wrapper')[0];

let pf1 = new Carousel("carousel-p1");
pf1.navigate();

let pf2 = new Carousel("carousel-p2");
pf2.navigate();

let pf3 = new Carousel("carousel-p3");
pf3.navigate();

let pf4 = new Carousel("carousel-p4");
pf4.navigate();

if (w.offsetWidth < 425) {
  let exp = document.querySelectorAll('.expectations__items')[0];
  exp.classList.add("portfolio__carousel-wrapper");
  exp.setAttribute("id", "exp");

  let expItems = document.querySelectorAll('.expectations__item'),
      hscr = document.querySelectorAll('.expectations__hscroller')[0];
  hscr.classList.add('js-scroller');
  for (let i = 0; i < expItems.length; i++) {
    expItems[i].classList.add('js-carousel-item');
  }

  let expCarousel = new Carousel("exp");
  expCarousel.navigate();
}


window.addEventListener('resize', function(e) {
  if (w.offsetWidth < 425) {
    let exp = document.querySelectorAll('.expectations__items')[0];
    exp.classList.add("portfolio__carousel-wrapper");
    exp.setAttribute("id", "exp");

    let expItems = document.querySelectorAll('.expectations__item'),
        hscr = document.querySelectorAll('.expectations__hscroller')[0];
    hscr.classList.add('js-scroller');
    for (let i = 0; i < expItems.length; i++) {
      expItems[i].classList.add('js-carousel-item');
    }

    let expCarousel = new Carousel("exp");
    expCarousel.navigate();
  } else {
    let exp = document.querySelectorAll('.expectations__items')[0];
    exp.classList.remove("portfolio__carousel-wrapper");
    exp.removeAttribute("id");

    let expItems = document.querySelectorAll('.expectations__item'),
        hscr = document.querySelectorAll('.expectations__hscroller')[0];
    hscr.classList.remove('js-scroller');
    for (let i = 0; i < expItems.length; i++) {
      expItems[i].classList.remove('js-carousel-item');
      expItems[i].style.display = "flex";
    }

    expCarousel = null;
  }
});