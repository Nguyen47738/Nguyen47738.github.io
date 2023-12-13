const menu = document.querySelector('#menu');
const header = document.querySelector('header');
const animate = document.querySelectorAll('li');
// console.log(reveal);
console.log(animate)
menu.addEventListener('click', function() {
    // console.log(e)
    this.classList.toggle('active');
    header.classList.toggle('active');
});

window.onscroll = function() {
    menu.classList.remove('active');
    header.classList.remove('active');
}

window.addEventListener('scroll', function() {
    var reveal = document.querySelectorAll('.reveal');
    console.log(reveal);
        for(var i=0; i<reveal.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveal[i].getBoundingClientRect().top;
            // console.log(windowHeight);
            // console.log(revealTop);
            // console.log(revealPoint);
            var revealPoint = 150;

            if(revealTop < windowHeight - revealPoint) {
                reveal[i].classList.add('show');
            }else {
                reveal[i].classList.remove('show');
            }
        }
})

animate.onclick = function() {

}

// console.log(menu)

