let number = -1;
let allArticles = document.querySelectorAll('article');
for(let i = 0; i < allArticles.length; i++){
  if(allArticles[i].classList.contains('.slide-index-active')){
    number = i;
  }
}

$('.results-start').slick({
  infinite: true,
  slidesToShow: 1,
  initialSlide: number,
  prevArrow: $('.back'),
  nextArrow: $('.next'),
  speed: 300,
  dots: true
});

// autosubmit radio button
$('.preference').change(function(){
    $('form').submit();
});

// timeout toggle
setTimeout(function() {
    document.querySelector('.start-screen').classList.remove('active')
    document.querySelector('.cycle-info').classList.add('active')
    },10
);

// toggle
let sectionButtons = document.querySelectorAll('section button');
let sectionsSwitch = document.querySelectorAll('main.index section');
for(let i = 0; i < sectionButtons.length; i++){
    sectionButtons[i].addEventListener('click', function(e){
        for(let k = 0; k < sectionsSwitch.length; k++){
            sectionsSwitch[k].classList.remove('active');
        }
        console.log(this);
        console.log(this.classList.contains('cycle-info'));

        switch (true) {
            case e.target.classList.contains('cycle-info'):
                console.log('cycle-info');
                document.querySelector('section.cycle-info').classList.add('active');
                break;
            case e.target.classList.contains('cycle-choice'):
                console.log('cycle-choice');
                document.querySelector('section.cycle-choice').classList.add('active');
                break;
            case e.target.classList.contains('overlay'):
                console.log('overlay');
                document.querySelector('section.overlay').classList.add('active');
                break;
        }
    });
}
