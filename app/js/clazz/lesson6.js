{
    let arr=Array.of(3,4,5,6,2323,332);
    console.log('arr=',arr);
    
    let empty = Array.of();
    console.log('empty',empty);
}
//Array.from //集合=>数组
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach((o)=>{
        console.log(o.textContent);
    })
    console.log(Array.from([1,3,5],(o)=>{return o*2}));
}
{
    console.log('fill-7',[1,'a',undefined].fill(7));
    console.log('fill-7',[1,'a',undefined,5,'34'].fill('nn',1,3));
    
}