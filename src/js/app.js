let number = -1;
let allArticles = document.querySelectorAll('article');
for(let i = 0; i < allArticles.length; i++){
  if(allArticles[i].classList.contains('slide-index-active')){
    number = i;
    $('.results-start').slick({
      infinite: true,
      slidesToShow: 1,
      initialSlide: number,
      prevArrow: $('.back'),
      nextArrow: $('.next'),
      speed: 300,
      dots: true
    });
  }
}


// // autosubmit radio button
// $('input').change(function(){
//     $('form').submit();
// });


let resultButtons = document.querySelectorAll('article button');
let sectionsToggle = document.querySelectorAll('.ingredients');
for(let i = 0; i < resultButtons.length; i++){
  resultButtons[i].addEventListener('click', function(e){
    document.querySelector('.results-start').classList.add('inactive');
    document.querySelector('.contolers').classList.add('inactive');
    for(let k = 0; k < sectionsToggle.length; k++){
      sectionsToggle[k].classList.remove('active');
    }
    switch (true) {
      case e.target.classList.contains('fish-button'):
        document.querySelector('.fish-result').classList.add('active');
        break;
      case e.target.classList.contains('environment-button'):
        document.querySelector('.environment-result').classList.add('active');
        break;
      case e.target.classList.contains('plants-button'):
        document.querySelector('.plants-result').classList.add('active');
        break;
      case e.target.classList.contains('bacteria-button'):
        document.querySelector('.bacteria-result').classList.add('active');
        break;
    }
  });
}
