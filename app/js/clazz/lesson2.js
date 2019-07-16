{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b);
}
{
    let a, b, rest;
    //解构赋值
    [a, b, ...rest] = [1, 2, 3, 4, 5]
    console.log(a, b, rest);
}
{
    let a, b;
    //对象解构赋值
    ({ a, b } = { a: 1, b: 2 });
    console.log(a, b);

}
{
    let a, b, c, rest;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c);

}
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);

}
{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f();
    console.log(a, b);
}
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , , b] = f();
    console.log(a, b);
}
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    //不确定返回的数据的长度
    [a, ...b] = f();
    console.log(a, b);
}
//对象的解构赋值
{
    let o = { p: 42, q: true };
    let { p, q } = o;
    console.log(p, q);
}
//默认赋值
{
    let { a = 10, b = 5 } = { a: 3 };
    console.log(a, b);

}
//Demo
{
    let metaData = {
        title: 'test',
        test: [
            { title: '111desv', desc: 'fsfsf' },
            { title: '111desv3', desc: 'fsfsf3' }
        ]
    };
    let { title: esTitle, test: [{ title: cnTitle }] } = metaData;
    let { title: esTitle2, test:esArr} = metaData;
    console.log(esTitle, cnTitle);
    console.log(esTitle2, esArr);

}