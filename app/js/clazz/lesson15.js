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