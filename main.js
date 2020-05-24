$(document).ready(() => {

  function colorShiftElement(targetElement, element) {
    const colorShift = $(element).data('colorShift');
    targetElement.removeClass();
    targetElement.addClass('shift-'+colorShift);
  }

  $('.shift-fg-btn').click(({currentTarget: element}) => {
    colorShiftElement($('#foreground'), element);
  });

  $('.shift-bg-btn').click(({currentTarget: element}) => {
    colorShiftElement($('#background'), element);
  });

  $('.shift-hw-btn').click(({currentTarget: element}) => {
    const hardwareFlavor = $(element).data('flavor');
    $('#hardware').attr("src",`img/hardware-${hardwareFlavor}.png`);
  });

});
