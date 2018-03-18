// MyOWn Carousel v.0.1
// by Alex Naidovich (c) 2018

class Carousel {
  
  constructor(id) {
    this.wrapper = document.getElementById(id);
    this.items = this.wrapper.querySelectorAll('.js-carousel-item');
    this.dotsArea = this.wrapper.parentNode.querySelectorAll('.js-scroller')[0];
    this.dots = this.dotsArea.querySelectorAll('span');
  }
  
  navigate() {
    let sIndex = 1;
    let items = this.items,
        dots = this.dots;
    
    function go(n) {
      return function(e) {
        console.log(n + " clicked")
        sIndex = n; 
        for (let i = 0; i < items.length; i++) {
          items[i].style.display = 'none';
          dots[i].classList.remove('active');
        }

        items[n].style.display = 'block';
        dots[n].classList.add('active');
      };
    }
    
    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].addEventListener('click', go(i), false)
    }
    
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].style.display = 'none';
      this.dots[i].classList.remove('active');
    }
    
    this.items[sIndex - 1].style.display = 'block';
    this.dots[sIndex - 1].classList.add('active');
  }
}