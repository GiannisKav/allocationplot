$('.slideshow').slick({
    dots: false,
    lazyLoad: 'progressive',
    infinite: true,
    speed: 1,
    fade: false,
    cssEase: 'linear'
});

// change visible slideshow on dropdown item change
$('.slide-select').on('input', function(event) {
    $('.slideshow').removeClass('visible');
    $('.slideshow[data-slideset-value="' + event.target.value + '"]').addClass('visible');
});

$('.algorithm, .estimate, .evenness').on('input', function() {
    var algorithm_value = $('.algorithm').val();
    var estimate_value = $('.estimate').val();
    var evenness_value = $('.evenness').val();
    var total_value;

    if (algorithm_value != null && estimate_value != null && evenness_value != null) {
        total_value = algorithm_value + ' ' + estimate_value + ' ' + evenness_value;
        $('.slide-select').val(total_value);
        $('.slide-select').trigger('input');
    }
});
