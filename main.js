$(document).ready(() => {

  const colorShiftElement = (targetElement, element) => {
    const colorShift = $(element).data('colorShift');
    $(element).parent().find('.color-selection-sub-heading').text(colorShift);
    targetElement.removeClass((index, className) => {
      return (className.match (/(^|\s)shift-\S+/g) || []).join(' ');
    });
    targetElement.addClass('shift-'+colorShift);
    targetElement.show();
  };

  $('.shift-fg-btn').click(({currentTarget: element}) => {
    colorShiftElement($('.foreground'), element);
  });

  $('.shift-bg-btn').click(({currentTarget: element}) => {
    colorShiftElement($('.background'), element);
  });

  $('.shift-rn-btn').click(({currentTarget: element}) => {
    colorShiftElement($('.rhinestones'), element);
  });

  $('.shift-hw-btn').click(({currentTarget: element}) => {
    const hardwareFlavor = $(element).data('flavor');
    $(element).parent().find('.color-selection-sub-heading').text(hardwareFlavor);
    const hardwares = $('.hardware');
    hardwares.each((idx, domElement) => {
      let hardware = $(domElement);
      const src = hardware.attr("src");
      const newSrc = src.split("-")[0] + `-${hardwareFlavor}.png`;
      hardware.attr("src",newSrc);
    })

  });

});
