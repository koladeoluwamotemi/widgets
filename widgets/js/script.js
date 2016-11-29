$(document).ready(function () {
    
    $('.panel-body').mouseenter(function () {
        $(this).addClass('secondWidget');
        $(this).find('span').addClass('glyph2');
    })
    .mouseleave(function () {
        $(this).removeClass('secondWidget');
        $(this).find('span').removeClass('glyph2');
    })
    .click(function () {
        $(this).parent().find('div').removeClass('secondWidget secondWidgetClick');
        $(this).parent().find('span').removeClass('glyph2 glyph2');
        $(this).addClass('secondWidgetClick');
        $(this).find('span').addClass('glyph3');
        alert($(this).text());
    });

});
