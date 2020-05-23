$(document).ready(() => {
  console.log("doc ready");

  $('.shift-fg-btn').click(({currentTarget: element}) => {
    const colorShift = $(element).data('colorShift');
    console.log("dop");
    let foreground = $('#foreground');
    foreground.removeClass();
    foreground.addClass('shift-'+colorShift);
  });

  $('.shift-bg-btn').click(({currentTarget: element}) => {
    const colorShift = $(element).data('colorShift');
    let background = $('#background');
    background.removeClass();
    background.addClass('shift-'+colorShift);
  });
});
