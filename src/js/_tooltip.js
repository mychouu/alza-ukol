import $ from 'jquery'
export default function tooltipInit() {

  $('.tooltip').on('click', function(e){
    e.stopPropagation();
    let $this = $(this);
    let tooltipID = $this.data('tooltip');

    $this.append('<span class="tooltip-popup">' + tooltipStrings[tooltipID-1] + '</span>');
  });

  $(document).mouseup(function(e) {
      var container = $('.tooltip-popup');

      if (container == undefined) return;

      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          $('.tooltip-popup').remove();
      }
  });

}