import $ from 'jquery'
import {CountUp} from 'countup.js'
const throttle = require('lodash.throttle');


export default function numberCounterInit() {
  let $numberCounter = $('.count-it');
  let countOpt = {
    separator: ' '
  }

  $numberCounter.each(function() {
    let $this = $(this);
    let countTo = parseInt($this.text().replace(/ /g,''));
    let elTop = $this[0].offsetTop;
    let duration = $this.data('duration');


    // set data for count just 1 time
    $this.data('isCounted', false);

    // counting from 0
    $this.text('0');

    $(window).scroll( throttle(function(){
      // prevent trigger more then 1 time
      if ($this.data('isCounted')) return;

      let top = $(document).scrollTop() + $(window).height();

      if(top > elTop) {
        let countUp = new CountUp($this[0], countTo, countOpt);
        countUp.start();
        $this.data('isCounted', true);
      }
    }, 200));
  });
}

