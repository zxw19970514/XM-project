;
var loginOn=false;
class Login{
    constructor(){
        this.init();
    }
    init(){
        var alla=document.getElementsByTagName('a');
        if(!loginOn){
            for(var i=0;i<alla.length;i++){
                alla[i].href="login.html";
            }
    }
    }
}
//new Login();
;