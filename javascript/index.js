
// 第一个轮播图
$(function (){
    var index=0;  /*标记当前图片位置索引*/
    var f;
    dingshiqi();
    function dingshiqi(){
        f=setInterval(function(){
            if(index==$(".box_picture").length-1){   //index==5也可以，不过以上方法可以使放入的图片数量不受限制
                index=0;
                $(".box_picture").css("opacity","0");
                $(".box_picture").eq(index).css("opacity","1");
                $(".circle_button").css("background-color","#ccc");
                $(".circle_button").eq(index).css("background-color","#e57b2b");
            }else{
                index++;
                $(".box_picture").css("opacity","0");
                $(".box_picture").eq(index).css("opacity","1");
                $(".circle_button").css("background-color","#ccc");
                $(".circle_button").eq(index).css("background-color","#e57b2b");
            }
        },3000)
    }
        $(".box_leftbutton").click(function(){
            clearInterval(f);
            if (index==0){
                index=$(".box_picture").length-1;
                $(".box_picture").css("opacity","0");
                $(".box_picture").eq(index).css("opacity","1");
                $(".circle_button").css("background-color","#ccc");
                $(".circle_button").eq(index).css("background-color","#e57b2b");
                dingshiqi();
            }else{
                index--;
                $(".box_picture").css("opacity","0");
                $(".box_picture").eq(index).css("opacity","1");
                $(".circle_button").css("background-color","#ccc");
                $(".circle_button").eq(index).css("background-color","#e57b2b");
                dingshiqi();
            }
        })
        $(".box_rightbutton").click(function (){
            clearInterval(f);
            if (index==$(".box_picture").length-1){
                index=0;
                $(".box_picture").css("opacity","0");
                $(".box_picture").eq(index).css("opacity","1");
                $(".circle_button").css("background-color","#ccc");
                $(".circle_button").eq(index).css("background-color","#e57b2b");
                dingshiqi();
            }else{
                index++;
                $(".box_picture").css("opacity","0");
                $(".box_picture").eq(index).css("opacity","1");
                $(".circle_button").css("background-color","#ccc");
                $(".circle_button").eq(index).css("background-color","#e57b2b");
                dingshiqi();
            }
        })
        $(".circle_button").click(function (){
            clearInterval(f);
            var indexx=$(this).index();
            index=indexx;
            $(".box_picture").css("opacity","0");
            $(".box_picture").eq(index).css("opacity","1");
            $(".circle_button").css("background-color","#ccc");
            $(".circle_button").eq(index).css("background-color","#e57b2b");
            dingshiqi();
        })
    })

//游戏列表，选项卡的制作
window.onload=function () {
    var nav=document.getElementById('nav');
    var oNav=nav.getElementsByTagName('li');

    var container=document.getElementById('container');
    var oDiv=container.getElementsByClassName('tab');
    for(var i=0;i<oNav.length;i++){
        oNav[i].index=i;
        oNav[i].onclick=function () {
            for(var i=0;i<oNav.length;i++){
                oNav[i].className='';
                oDiv[i].style.display="none";
            }
            this.className='act';
            oDiv[this.index].style.display="block"
        }
        for(var m=1;m<oNav.length;m++){
            oNav[m].className='';
            oDiv[m].style.display="none";
        }
    }
};