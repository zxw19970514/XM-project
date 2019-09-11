;
class Goodlist{
    constructor(){
        this.insert();
    }
    insert(){
        var that=this;
        $.ajax({
            url:"http://127.0.0.1/XM-project/data/list.json",
            success:function(res){
                that.res=res;
                that.display();
                // console.log($('.category'));
            }
        })
    }
    display(){
        var str1="";
        var num=0;
        // console.log(this.res);
        for(var i=0;i<this.res.length;i++){
            // console.log(this.res[i]);
            for(var n in this.res[i]){
                this.res[i][n]=this.res[i][n].split(',');
                // console.log(this.res[i][n])
                for(var m=0;m<this.res[i][n].length;m++){
                    // console.log(this.res[i][n][m]);
                    str1+=`<a href="#">${this.res[i][n][m]}</a>`
                }
                $('.category').eq(i).find('.list')[num].innerHTML=str1;
                str1="";
                num++;
            }
            num=0;
            
            
        }
    }
}
setTimeout(function(){
    new Goodlist();
},1000)
;