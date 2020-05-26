$(document).ready(() => {

  function colorShiftElement(targetElement, element) {
    const colorShift = $(element).data('colorShift');
    $(element).parent().find('.color-selection-sub-heading').text(colorShift);
    targetElement.removeClass((index, className) => {
      return (className.match (/(^|\s)shift-\S+/g) || []).join(' ');
    });
    targetElement.addClass('shift-'+colorShift);
  }

  $('.shift-fg-btn').click(({currentTarget: element}) => {
    colorShiftElement($('.foreground'), element);
  });

  $('.shift-bg-btn').click(({currentTarget: element}) => {
    colorShiftElement($('.background'), element);
  });

  $('.shift-hw-btn').click(({currentTarget: element}) => {
    const hardwareFlavor = $(element).data('flavor');
    $(element).parent().find('.color-selection-sub-heading').text(hardwareFlavor);
    $('.hardware').attr("src",`img/hardware-${hardwareFlavor}.png`);
  });

});
