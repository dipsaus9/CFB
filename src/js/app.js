if(document.querySelector('main.pref')){
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
  let resultButtons = document.querySelectorAll('article button');
  let sectionsToggle = document.querySelectorAll('.ingredients');
  for(let i = 0; i < resultButtons.length; i++){
    resultButtons[i].addEventListener('click', function(e){
      document.querySelector('.header.first').classList.add('inactive');
      document.querySelector('.header.second').classList.remove('inactive');

      document.querySelector('.results-start').classList.add('inactive');
      document.querySelector('.contolers').classList.add('inactive');
      for(let k = 0; k < sectionsToggle.length; k++){
        sectionsToggle[k].classList.remove('active');
      }
      switch (true) {
        case e.target.classList.contains('fish-button'):
          document.querySelector('.fish-result').classList.add('active');
          $('input[type="hidden"]').val('fish');
          break;
        case e.target.classList.contains('environment-button'):
          document.querySelector('.environment-result').classList.add('active');
          $('input[type="hidden"]').val('environment');
          break;
        case e.target.classList.contains('plants-button'):
          document.querySelector('.plants-result').classList.add('active');
          $('input[type="hidden"]').val('plants');
          break;
        case e.target.classList.contains('bacteria-button'):
          document.querySelector('.bacteria-result').classList.add('active');
          $('input[type="hidden"]').val('bacteria');
          break;
      }
    });
    document.querySelector('.back-button').addEventListener('click', function(){
      document.querySelector('.header.first').classList.remove('inactive');
      document.querySelector('.header.second').classList.add('inactive');
      document.querySelector('.results-start').classList.remove('inactive');
      document.querySelector('.contolers').classList.remove('inactive');
      for(let k = 0; k < sectionsToggle.length; k++){
        sectionsToggle[k].classList.remove('active');
      }
    });
  }
  $('input').on('change', function(){
    var test = $(this).closest('label');
    $('label').removeClass('active');
    console.log($('input:checked'));
    test.addClass('active');
  });
}
// autosubmit radio button
if(document.querySelector('main.index')){
  $('.preference input').change(function(){
      $('form').submit();
  });
  // timeout toggle
  setTimeout(function() {
    document.querySelector('.start-screen').classList.remove('active');
    document.querySelector('.cycle-info').classList.add('active');
  },2000);


// toggle
  let sectionButtons = document.querySelectorAll('section button');
  let sectionsSwitch = document.querySelectorAll('main.index section');
  for(let i = 0; i < sectionButtons.length; i++){
    sectionButtons[i].addEventListener('click', function(){
      for(let k = 0; k < sectionsSwitch.length; k++){
        sectionsSwitch[k].classList.remove('active');
      }
      switch (true) {
        case this.classList.contains('cycle-info'):
          document.querySelector('section.cycle-info').classList.add('active');
          break;
        case this.classList.contains('cycle-choice'):
          document.querySelector('section.cycle-choice').classList.add('active');
          break;
        case this.classList.contains('overlay'):
          document.querySelector('section.overlay').classList.add('active');
          break;
      }
    });
  }
}
