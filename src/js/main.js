$(document).ready(function() {
    $('.owl-carousel.main-slider').owlCarousel({
        items: 1,
        dotsContainer: '.start__dots-container'
    });

    $('.owl-carousel.filter').owlCarousel({
        items: 3,
        loop: true,
        center: true,
        autoWidth: true
    });

    $('.owl-carousel.delivery__users').owlCarousel({
        items: 3,
        autoWidth: true
    });

    resetRangeInput($('.filters__slide-label_filters'),50);
    resetRangeInput($('.filters__slide-label_effects'),0);

    $('.filters__slide_filters').on('input',function() {
        const ln = $(this).width() - 24;
        $('.filters__slide-label').text(this.value);
        $('.filters__slide-label').css('left',ln / 100 * this.value+'px');
    });

    $('.filters__slide_effects').on('input',function() {
        const ln = $(this).width() - 24;
        $('.filters__slide-label').text(this.value - 50);
        $('.filters__slide-label').css('left',ln / 100 * this.value+'px');
    });

    const head_active = "filters__panel-name_active";
    const panel_active = "filters__panel_active";
    const footer_active = "filters__footer_active";

    $('.filters__panel-name').on('click',function() {
        if(!$(this).hasClass(head_active)) {
            $('.filters__panel-name').removeClass(head_active);
            $(this).addClass(head_active);

            $('.filters__panel').each(function(i,item) {
                if($(item).hasClass(panel_active)) {
                    $(item).removeClass(panel_active);
                }
                else {
                    $(item).addClass(panel_active);
                }
            });

            $('.filters__footer').each(function(i,item) {
                if($(item).hasClass(footer_active)) {
                    $(item).removeClass(footer_active);
                }
                else {
                    $(item).addClass(footer_active);
                }
            });
        }
    });

    $('.owl-carousel.filter').on('changed.owl.carousel', function(event) {
        const item = event.item.index;

        resetRangeInput($('.filters__footer_active .filters__slide-label_filters'),50);
        resetRangeInput($('.filters__footer_active .filters__slide-label_effects'),0);
    });

    const maxlimit = 290;

    $('textarea').on('input', function(e) {
        var countfield = $('.greeting__left');
        if ( this.value.length >= maxlimit ) {
            this.value = this.value.substring( 0, maxlimit );
            countfield.text(0);
         return false;
        } else {
         countfield.text(maxlimit - this.value.length);
        }
    });
});

function resetRangeInput(element,default_value) {
    if (!element.length) return;
    const parent = $(element).parent();
    element.text(default_value);
    const ln = $('.filters__slide',parent).width() - 24;
    element.css('left',ln / 100 * 50 + 'px');
    $('.filters__slide').val(50);
}