$('#slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow:"<img class='a-left control-c prev slick-prev container' src='imagens/Left_arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next container'src='imagens/Right_arrow.png'>",
});

$('#veja-mais').on('click', (e) => {
    const element = e.currentTarget
    $('#equipe').slideToggle(500)
    $(element).toggleClass('ativa')
})
