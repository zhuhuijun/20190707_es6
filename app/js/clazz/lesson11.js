//proxy and Reflect 
{
    let obj = {
        time:'2019-03-11',
        name:'net',
        _r:123
    };
    let monitor = new Proxy(obj,{
        //拦截属性的读取
        get(target,key){
            return target[key].replace('2019','2018');
        },
        set(target,key,val){
            if('name' === key){
              return  target[key] = val;
            }else{
                return target[key];
            }
        }
    });
    console.log('get',monitor.time);
    monitor.name='aa';
    monitor._r=789;
    console.log('set',monitor);
    
}