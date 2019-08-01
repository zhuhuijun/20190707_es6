{
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };
    let es6 = {
        o,
        k
    };
    console.log('es5:',es5);
    console.log('es6:',es6);
    let es5_method={
        hello:function(){
            console.log("es5_method");
            
        }
    };
    let es6_method={
        hello(){
            console.log('es6_method');
            
        }
    };
    console.log(es5_method,es6_method);
    
}
//属性表达式
{
    let a='b';
    let es5_obj={
        a:'c'
    };
    let es6_obj={
        [a]:'c'
    };
    console.log(es5_obj,es6_obj);
}
{
    console.log('string',Object.is('abc','abc'),'abc'==='abc');
    //浅copy
    console.log('assign',Object.assign({a:'a'},{b:'b'}));

    let test = {o:123,b:322};
    for(let [key,val] of Object.entries(test)){
        console.log(key,val);
        
    }
    
}

{
    // let {a,b,...c}={a:'a',b:'b',c:'c',d:'d'};
    // console.log(a,b,c);
    
}