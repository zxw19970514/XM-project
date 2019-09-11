setTimeout(function(){
    var clientH = document.documentElement.clientHeight;
    var aimg = document.querySelectorAll("img");
    var arr = [];
    for(var i=0;i<aimg.length;i++){
        arr.push(aimg[i])
    }
    lazy();
    onscroll = function(){
        lazy();
    }
    function lazy(){
        var scrollT = document.documentElement.scrollTop;
        for(var i=0;i<arr.length;i++){
            $a=$(arr[i])
            if(scrollT > $a.offset().top - clientH){
                arr[i].src = arr[i].getAttribute("data-original");
                arr.splice(i,1);
                i--;
            }
        }
    }
},500)