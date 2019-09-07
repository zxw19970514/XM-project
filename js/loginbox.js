;
$('.loginTitle').on('mouseenter','a',function(){
    var index=parseInt($(this)[0].getAttribute('index'));
    if(index==1){
        $('.loginForm').eq(0).css("display","block")
        $('.loginForm').eq(1).css("display","none")
    }
    if(index==2){
        $('.loginForm').eq(1).css("display","block")
        $('.loginForm').eq(0).css("display","none")
    }
});