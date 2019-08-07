import { log } from "util";

{
    //generator的基本定义
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c';
    };
    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    for (let val of obj) {
        console.log('value:', val);
    }

}


{
    //状态机函数
    let state = function* () {
        while (1) {
            yield 'a';
            yield 'b';
            yield 'c';
        }
    };
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());

}
{
    //状态机函数2 //需要babel插件
    // let state = async function () {
    //     while (1) {
    //         await 'a';
    //         await 'b';
    //         await 'c';
    //     }
    // };
    // let status = state();
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());

}