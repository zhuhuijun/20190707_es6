{
    //基本定义和生成实例
    class Parent {
        constructor(name = 'name') {
            this.name = name;
        }
    }

    let vp = new Parent('v');
    console.log('vp', vp);

}
//继承
{
    class Parent {
        constructor(name = 'name') {
            this.name = name;
        }
    }

    class Child extends Parent {

    }
    let child = new Child();
    console.log('child', child);
    let child1 = new Child('child');
    console.log('child1', child1);

}
//继承
{
    class Parent {
        constructor(name = 'name') {
            this.name = name;
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            super(name);
            this.type = name;
        }
    }
    let child = new Child();
    console.log('child', child);
    let child1 = new Child('child1');
    console.log('child1', child1);

}
//getter and setter
{
    class Parent {
        constructor(name = 'name') {
            this.name = name;
        }
        get longName() {
            return 'mk' + this.name;
        }
        set longName(val) {
            this.name = val;
        }
    }
    //getter
    let v = new Parent();
    console.log('getter', v.longName);
    //setter
    v.longName = 'hello,word';
    console.log('setter', v.longName);

}
//类的静态方法
{
    class Parent {
        constructor(name = 'name') {
            this.name = name;
        }
        get longName() {
            return 'mk' + this.name;
        }
        set longName(val) {
            this.name = val;
        }

        static tell(name) {
            console.log('this is tell:' + name);
        }
    }
    //静态属性
    Parent.mytype = 'parent';
    //静态方法
    Parent.tell('hell');

}