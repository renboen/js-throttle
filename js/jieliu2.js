var Throttle=function(fn,dely,mustdo){
	var timer=null;
	var begin=new Date();
	return function(){
		var that=this;
		var args=arguments;
		var current=new Date();
		clearTimeout(timer);
		if(current-begin>mustdo){
			fn.apply(that,args);
			begin=current
		}else{
			timer=setTimeout(function(){
				fn.apply(that,args);
			},dely)
		}
		
	}
}

//首次进入不执行（可以先调用一次）




	n=0;
    function resizehandler(){
        console.log(new Date().getTime());
        console.log(++n);
    }

    window.onresize=Throttle(resizehandler,500,1000)
