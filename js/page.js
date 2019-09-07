;
$('.tab_phone').children().hover(function(){
    $(this).attr("class","te_blue");
    $(this).siblings().attr('class',"");
    var liindex=parseInt($(this)[0].getAttribute('index'));
    // console.log(typeof liindex);
    // console.log($(".main").children().eq(liindex));
    $(".main_phone").children().eq(liindex).siblings().css("display","none")
    $(".main_phone").children().eq(liindex).css("display","block");
})

$('.tab_computer').children().hover(function(){
    $(this).attr("class","te_blue");
    $(this).siblings().attr('class',"");
    var liindex=parseInt($(this)[0].getAttribute('index'));
    console.log(liindex);
    // console.log($(".main").children().eq(liindex));
    $(".main_computer").children().eq(liindex).siblings().css("display","none")
    $(".main_computer").children().eq(liindex).css("display","block");
})

$('.tab_ele').children().hover(function(){
    $(this).attr("class","te_blue");
    $(this).siblings().attr('class',"");
    var liindex=parseInt($(this)[0].getAttribute('index'));
    console.log(liindex);
    // console.log($(".main").children().eq(liindex));
    $(".main_ele").children().eq(liindex).siblings().css("display","none")
    $(".main_ele").children().eq(liindex).css("display","block");
})

$('.tab_chufang').children().hover(function(){
    $(this).attr("class","te_gray");
    $(this).siblings().attr('class',"");
    var liindex=parseInt($(this)[0].getAttribute('index'));
    // console.log(liindex);
    // console.log($(".main").children().eq(liindex));
    $(".main_chufang").children().eq(liindex).siblings().css("display","none")
    $(".main_chufang").children().eq(liindex).css("display","block");
})

$('.tab_sup').children().hover(function(){
    $(this).attr("class","te_blue");
    $(this).siblings().attr('class',"");
    var liindex=parseInt($(this)[0].getAttribute('index'));
    // console.log(liindex);
    // console.log($(".main").children().eq(liindex));
    $(".main_sup").children().eq(liindex).siblings().css("display","none")
    $(".main_sup").children().eq(liindex).css("display","block");
})

$('.tab_house').children().hover(function(){
    $(this).attr("class","te_yellow");
    $(this).siblings().attr('class',"");
    var liindex=parseInt($(this)[0].getAttribute('index'));
    // console.log(liindex);
    // console.log($(".main").children().eq(liindex));
    $(".main_house").children().eq(liindex).siblings().css("display","none")
    $(".main_house").children().eq(liindex).css("display","block");
})

$('.tab_car').children().hover(function(){
    $(this).attr("class","te_hui");
    $(this).siblings().attr('class',"");
    var liindex=parseInt($(this)[0].getAttribute('index'));
    // console.log(liindex);
    // console.log($(".main").children().eq(liindex));
    $(".main_car").children().eq(liindex).siblings().css("display","none")
    $(".main_car").children().eq(liindex).css("display","block");
})
;