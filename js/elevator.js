;
class Elevator{
    constructor(){
        this.elevator=document.getElementById('elevator');
        this.init();
        this.move();
    }
    init(){
        var that=this;
        if(document.documentElement.scrollTop>=2011 && document.documentElement.scrollTop<6300){
            that.elevator.style.display='block';
        }
        document.onscroll=function(){
            if(document.documentElement.scrollTop>=2011 && document.documentElement.scrollTop<6300){
                that.elevator.style.display='block';
            }else{
                that.elevator.style.display='none';
            }
        }
            
    }
    move(){
        var index=0;
        $("#alEve").children("li").click(function(){
            $("html").stop().animate({
                scrollTop:$(".flooraa").eq($(this).index())[0].offsetTop,
            })
            index=$(this).index();
        })
        $('.Totop').click(function(){
            if(index>0){
                index--;
            }else{
                index=6;
            }
            $("html").stop().animate({
                scrollTop:$(".flooraa").eq(index)[0].offsetTop,
            })
        })
        $('.Tobottom').click(function(){
            if(index<6){
                index++;
            }else{
                index=0;
            }
            $("html").stop().animate({
                scrollTop:$(".flooraa").eq(index)[0].offsetTop,
            })
        })
    }
}
new Elevator();
;