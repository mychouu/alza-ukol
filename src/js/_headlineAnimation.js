import $ from 'jquery'

export default function headlineAnimationInit(){
  const animationDelay = 3000;

// inspiration https://codyhouse.co/demo/animated-headlines/index.html
  animateHeadline($('.alza-prem-teaser__info h1'));

  function animateHeadline($headlines) {

    setTimeout(() => { hideWord( $headlines.find('.is-visible') ) }, animationDelay);
  }

  function hideWord($word) {
     let nextWord = takeNext($word);
     switchWord($word, nextWord);
     setTimeout(() => { hideWord(nextWord) }, animationDelay);
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function switchWord($oldWord, $newWord) {
     $oldWord.removeClass('is-visible').addClass('is-hidden');
     $newWord.removeClass('is-hidden').addClass('is-visible');
  }
}