//proxy and Reflect 
{
    let obj = {
        time: '2019-03-11',
        name: 'net',
        _r: 123
    };
    let monitor = new Proxy(obj, {
        //拦截属性的读取
        get(target, key) {
            return target[key].replace('2019', '2018');
        },
        set(target, key, val) {
            if ('name' === key) {
                return target[key] = val;
            } else {
                return target[key];
            }
        },
        has(target, key) {
            if ('name' === key) {
                return target[key];
            } else {
                return false;
            }
        },
        ownKeys(target) {
            return Object.keys(target).filter((item) => item != 'time');
        }
    });
    console.log('get', monitor.time);
    monitor.name = 'aa';
    monitor._r = 789;
    console.log('set', monitor);
    console.log('has', 'name' in monitor, 'time' in monitor);
    console.log('ownKeys', Object.keys(monitor));

}

{
    let obj = {
        time: '2019-03-11',
        name: 'net',
        _r: 123
    };
    console.log(Reflect.get(obj, 'time'));
    Reflect.set(obj, 'name', 'hello,world');
    console.log('set', obj);
    console.log('has', Reflect.has(obj, 'name'));
}

{
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let _va = this._validator[key];
                    if (!!_va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    } else {
                        throw Error(`不能设置${value} 到${key}`)
                    }
                } else {
                    throw Error(`${key} is not exists`)
                }
            }
        })
    }


    const personValidator = {
        name(val) {
            return typeof val === 'string';
        },
        age(val) {
            return typeof val === 'number' && val >= 18;
        },
        mobile(val) {
            return val.length === 11;
        }
    }

    class Person {
        constructor(name, age, mobile) {
            this.name = name;
            this.age = age;
            this.mobile = mobile;
            return validator(this, personValidator);
        }
    }

    const p = new Person('lili', 30);
    console.log(p);
    p.name = '48';
    // p.mobile = 'rttt';
    p.mobile = '00000000000';
    console.log(p);

}