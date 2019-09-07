;$(".timego").countDown({
    times: 120,  //必填'2018/8/13 18:00:00或者 2(两分钟) 
    days:false,
    ms: false,   //毫秒是否开启
    Hour: true ,  //小时是否开启
    unit: {
		hour: ':',
		min: ':',
		second: ''
	}  
});