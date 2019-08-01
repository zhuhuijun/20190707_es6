//默认参数
{
    function param(x, y = 'world') {
        console.log(x, y);
    }
    param('hello');
    param('hello', '123456');
}

{
    let x = 'test';
    function test2(c, y = x) {
        console.log('作用域', c, y);

    }
    test2('kill');
}

{
    function test3(...arg) {
        for (let v of arg) {
            console.log('rest', v);

        }
    }
    test3(1, 2, 3, 4, 5, 'fsf');
}


{
    let arrow = x => x * 2;
    let arrow1 = () => 5666;
    let arrow2 = (x) => { return x * 2 };
    console.log('x', arrow(3));
    console.log('x', arrow1());
    console.log('x', arrow2(3));

}
{
    console.log('a',...[1,2,3]);
    
}