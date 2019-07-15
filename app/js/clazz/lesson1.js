function test(){
    let a=1222;
    for(var i=0;i<3;i++){
        console.log(i);
    }
    console.log(i);

    let c=1;
    // let c=2; //不能重复
}
test();
function last(){
    const PI=3.14;//常量初始化赋值
    console.log(PI);
    // PI=4;
    const k={
        a:1
    };
    k.b=2;
    console.log(k);
}
last();