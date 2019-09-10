;
$('.dl').validate()
    $('.zc').validate()
    class Gome_login{
        constructor(){
            this.loginN=document.getElementById('loginuser');
            this.loginP=document.getElementById('loginPassword');
            this.registerN=document.getElementById('registerName');
            this.registerP=document.getElementById('registerPassword');
            this.regisertP2=document.getElementById('dobPassword')
            this.loginbtn=document.getElementById('loginbtn');
            this.registerbtn=document.getElementById('registerbtn');
            this.init();
            this.focusOrNot();
            this.Event();
        }
        init(){
            this.loginN.value=null;
            this.registerN.value=null;
        }
        focusOrNot(){
            var that=this
            this.loginN.onfocus=function(){
                $('.NameDefault').css("display","none");
            }
            this.loginP.onfocus=function(){
                $('.passwordDefault').css("display","none");
            }
            this.registerN.onfocus=function(){
                $('.NameDefault2').css("display","none");
            }
            this.registerP.onfocus=function(){
                $('.passwordDefault2').css("display","none");
            }
            this.regisertP2.onfocus=function(){
                $('.passwordDefault22').css("display","none");
            }
        }
        Event(){
            var that=this;
            this.registerbtn.onclick=function(){
                that.access=localStorage.getItem('access')? JSON.parse(localStorage.getItem("access")) : [];
                var regname=that.registerN.value;
                var regpass=that.registerP.value;
                var o = that.access.some((val,index)=>{
                    console.log(val.name)
                    return regname == val.name;
                })
                if(o){
                    alert("用户名已存在,请重新输入");
                }else{
                    that.access.push({
                        name:regname,
                        password:regpass
                    })
                    alert('注册成功');
                    window.location.href='login.html';
                }
                localStorage.setItem("access",JSON.stringify(that.access));
            }
            this.loginbtn.onclick=function(){
                that.access=JSON.parse(localStorage.getItem('access'));
                var logname=that.loginN.value;
                var logpass=that.loginP.value;
                if(!logname){
                    alert('用户名为空');
                }else if(!logpass){
                    alert('密码为空');
                }
                for(var i=0;i<that.access.length;i++){
                    if(logname==that.access[i].name && logpass==that.access[i].password){
                        removeCookie('name');
                        setCookie('name',logname);
                        setCookie('loginon','true');
                        window.location.href='http://127.0.0.1/XM-project/index.html';
                    }
                }
            }
        }
    }
    new Gome_login();
;