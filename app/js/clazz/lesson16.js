
{
    //修饰器是一个函数
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    };

    class TestDescrip {
        @readonly
        mytime() {
            return '2019-08-05';
        }
    }

    let t = new TestDescrip();
    // t.mytime = function () {
    //     console.log('RESET mytime');
    // };
    console.log('time:', t.mytime());

}

{
    let mylog = (type) => {
        return function (target, name, descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target, arg);
                console.info(`log...${type}`)
            }
        };
    };


    class AD {
        @mylog('show')
        show() {
            console.info('ad show');
        }
        @mylog('click')
        click() {
            console.info('ad show');
        }
    }


    let ad = new AD();
    ad.show();
    ad.click();
}