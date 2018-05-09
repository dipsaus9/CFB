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
  initialSlide: number
});
