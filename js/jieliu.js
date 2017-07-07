 		n=0;
        function resizehandler(){
            console.log(new Date().getTime());
            console.log(++n);
        }
//节流函数（无限节流详见节流函数Txt）
        function throttle(method,context){
            clearTimeout(method.tId);
            method.tId=setTimeout(function(){
                method.call(context);
            },500);
        }

        window.onresize=function(){
            throttle(resizehandler,window);
        };
