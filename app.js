$(document).ready(() => {
    $(".slider-content").slick({
        dots: true,
        easing: 'ease',
        // prevArrow: 'button-prev',
        // nextArrow: 'button-next',

    });

    // fetch('http://192.168.0.107:8080/data')
    // .then(res => res.json())
    // .then(data => console.log(data));
})

$(document).ready(function() {
    $('.header-burger').click(function(event){
        $('.header-burger,.header-menu').toggleClass('active');
    });
});