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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm93bC1jYXJvdXNlbC5tYWluLXNsaWRlcicpLm93bENhcm91c2VsKHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBkb3RzQ29udGFpbmVyOiAnLnN0YXJ0X19kb3RzLWNvbnRhaW5lcidcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5vd2wtY2Fyb3VzZWwuZmlsdGVyJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgY2VudGVyOiB0cnVlLFxyXG4gICAgICAgIGF1dG9XaWR0aDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm93bC1jYXJvdXNlbC5kZWxpdmVyeV9fdXNlcnMnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgYXV0b1dpZHRoOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXNldFJhbmdlSW5wdXQoJCgnLmZpbHRlcnNfX3NsaWRlLWxhYmVsX2ZpbHRlcnMnKSw1MCk7XHJcbiAgICByZXNldFJhbmdlSW5wdXQoJCgnLmZpbHRlcnNfX3NsaWRlLWxhYmVsX2VmZmVjdHMnKSwwKTtcclxuXHJcbiAgICAkKCcuZmlsdGVyc19fc2xpZGVfZmlsdGVycycpLm9uKCdpbnB1dCcsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbG4gPSAkKHRoaXMpLndpZHRoKCkgLSAyNDtcclxuICAgICAgICAkKCcuZmlsdGVyc19fc2xpZGUtbGFiZWwnKS50ZXh0KHRoaXMudmFsdWUpO1xyXG4gICAgICAgICQoJy5maWx0ZXJzX19zbGlkZS1sYWJlbCcpLmNzcygnbGVmdCcsbG4gLyAxMDAgKiB0aGlzLnZhbHVlKydweCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmZpbHRlcnNfX3NsaWRlX2VmZmVjdHMnKS5vbignaW5wdXQnLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGxuID0gJCh0aGlzKS53aWR0aCgpIC0gMjQ7XHJcbiAgICAgICAgJCgnLmZpbHRlcnNfX3NsaWRlLWxhYmVsJykudGV4dCh0aGlzLnZhbHVlIC0gNTApO1xyXG4gICAgICAgICQoJy5maWx0ZXJzX19zbGlkZS1sYWJlbCcpLmNzcygnbGVmdCcsbG4gLyAxMDAgKiB0aGlzLnZhbHVlKydweCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGVhZF9hY3RpdmUgPSBcImZpbHRlcnNfX3BhbmVsLW5hbWVfYWN0aXZlXCI7XHJcbiAgICBjb25zdCBwYW5lbF9hY3RpdmUgPSBcImZpbHRlcnNfX3BhbmVsX2FjdGl2ZVwiO1xyXG4gICAgY29uc3QgZm9vdGVyX2FjdGl2ZSA9IFwiZmlsdGVyc19fZm9vdGVyX2FjdGl2ZVwiO1xyXG5cclxuICAgICQoJy5maWx0ZXJzX19wYW5lbC1uYW1lJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighJCh0aGlzKS5oYXNDbGFzcyhoZWFkX2FjdGl2ZSkpIHtcclxuICAgICAgICAgICAgJCgnLmZpbHRlcnNfX3BhbmVsLW5hbWUnKS5yZW1vdmVDbGFzcyhoZWFkX2FjdGl2ZSk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoaGVhZF9hY3RpdmUpO1xyXG5cclxuICAgICAgICAgICAgJCgnLmZpbHRlcnNfX3BhbmVsJykuZWFjaChmdW5jdGlvbihpLGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmKCQoaXRlbSkuaGFzQ2xhc3MocGFuZWxfYWN0aXZlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbSkucmVtb3ZlQ2xhc3MocGFuZWxfYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbSkuYWRkQ2xhc3MocGFuZWxfYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuZmlsdGVyc19fZm9vdGVyJykuZWFjaChmdW5jdGlvbihpLGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmKCQoaXRlbSkuaGFzQ2xhc3MoZm9vdGVyX2FjdGl2ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKGZvb3Rlcl9hY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtKS5hZGRDbGFzcyhmb290ZXJfYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm93bC1jYXJvdXNlbC5maWx0ZXInKS5vbignY2hhbmdlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBldmVudC5pdGVtLmluZGV4O1xyXG5cclxuICAgICAgICByZXNldFJhbmdlSW5wdXQoJCgnLmZpbHRlcnNfX2Zvb3Rlcl9hY3RpdmUgLmZpbHRlcnNfX3NsaWRlLWxhYmVsX2ZpbHRlcnMnKSw1MCk7XHJcbiAgICAgICAgcmVzZXRSYW5nZUlucHV0KCQoJy5maWx0ZXJzX19mb290ZXJfYWN0aXZlIC5maWx0ZXJzX19zbGlkZS1sYWJlbF9lZmZlY3RzJyksMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtYXhsaW1pdCA9IDI5MDtcclxuXHJcbiAgICAkKCd0ZXh0YXJlYScpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgY291bnRmaWVsZCA9ICQoJy5ncmVldGluZ19fbGVmdCcpO1xyXG4gICAgICAgIGlmICggdGhpcy52YWx1ZS5sZW5ndGggPj0gbWF4bGltaXQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cmluZyggMCwgbWF4bGltaXQgKTtcclxuICAgICAgICAgICAgY291bnRmaWVsZC50ZXh0KDApO1xyXG4gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgY291bnRmaWVsZC50ZXh0KG1heGxpbWl0IC0gdGhpcy52YWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlc2V0UmFuZ2VJbnB1dChlbGVtZW50LGRlZmF1bHRfdmFsdWUpIHtcclxuICAgIGlmICghZWxlbWVudC5sZW5ndGgpIHJldHVybjtcclxuICAgIGNvbnN0IHBhcmVudCA9ICQoZWxlbWVudCkucGFyZW50KCk7XHJcbiAgICBlbGVtZW50LnRleHQoZGVmYXVsdF92YWx1ZSk7XHJcbiAgICBjb25zdCBsbiA9ICQoJy5maWx0ZXJzX19zbGlkZScscGFyZW50KS53aWR0aCgpIC0gMjQ7XHJcbiAgICBlbGVtZW50LmNzcygnbGVmdCcsbG4gLyAxMDAgKiA1MCArICdweCcpO1xyXG4gICAgJCgnLmZpbHRlcnNfX3NsaWRlJykudmFsKDUwKTtcclxufSJdLCJmaWxlIjoibWFpbi5qcyJ9
