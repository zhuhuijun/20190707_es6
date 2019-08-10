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

{

    let draw = function (count) {
        console.info(`还有${count}`);
    }
    let residue = function* (count) {
        while (count > 0) {
            count--;
            yield draw(count);
        }
    }
    let start = residue(5);

    let divE = document.createElement('button');
    divE.id = 'start';
    divE.textContent = '开始';
    document.body.appendChild(divE);
    //事件绑定
    document.getElementById('start').addEventListener('click', function () {
        start.next();
    }, false);
}


{
    //长轮询
    let ajax = function* () {
        yield new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve({ code: 4});
            }, 200);
        })
    };


    let pull = function () {
        let generator = ajax();
        let step = generator.next();
        step.value.then(function (d) {
            if (d.code != 0) {
                setTimeout(function () {
                    console.log('waiting...');
                    pull();
                }, 1000);
            } else {
                console.info(d.code);
            }
        })
    };
    //调用
    pull();
}