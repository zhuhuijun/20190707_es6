{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size', list.size);
}

{
    let arr = [1, 2, 3, 4]
    let list = new Set(arr)
    console.log('size', list.size);
}

{
    let list = new Set()
    list.add(1)
    list.add(2)
    list.add(1)
    console.log('list', list);
}

{
    let arr = [1, 2, 3, 1, 'r'];
    let list2 = new Set(arr);
    console.log('unique', list2);

}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr)
    console.log('has', list.has('add'));
    console.log('delete', list.delete('add'), list);
    console.log('delete', list.clear(), list);
}
{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr)
    for (let key of list.keys()) {
        console.log('keys', key);
    }
    for (let val of list.values()) {
        console.log('val', val);
    }
    for (let val of list) {
        console.log('val2', val);
    }


    list.forEach((item) => {
        console.log('item:', item);

    });
}

{
    //元素必须是对象
    //
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg)
    console.log('weaklist:', weakList);
}
{
    let map = new Map();
    let arr = ['123'];
    map.set(arr, '456');
    console.log('map:', map);
    console.log('arr:', map.get(arr));
}


{
    let map = new Map([['a', '123'], ['b', '456']]);
    console.log('map2:', map);
    console.log('size', map.size);
    console.log('get', map.get('a'));
    console.log('delete', map.delete('a'), map);
    console.log('clear', map.clear(), map);
}
{
    let weakMap = new WeakMap();
    let o = {}
    weakMap.set(o, 123)
    console.log('weakMap', weakMap);
    console.log('get:', weakMap.get(o));
}
//map and arr
{
    let map = new Map()
    let arr = [];
    //增
    map.set('a', 1)
    arr.push({ t: 1 })
    console.log('map-arr', map, arr);
    //查
    let isexit = map.has('t');
    let isha = arr.find((item) => item.t);
    console.log('has', isexit, isha);
    //改变
    map.set('t', 2);
    arr.forEach((item) => item.t ? item.t = 2 : '');
    console.log('update', map, arr);
    //刪除
    map.delete('t')
    let index = arr.findIndex(item => item.t);
    arr.splice(index, 1);
    console.log('delete', map, arr);

}
//set and arr
{
    let set = new Set();
    let arr = [];
    let item = { t: 1 };
    set.add(item);
    arr.push(item);
    console.log('set-array-add', set, arr);
    //查找
    let isexit = set.has(item);
    let isha = arr.find((item) => item.t);
    console.log('has', isexit, isha);
    //改变
    set.forEach(item => item.t ? item.t = 3 : '');
    arr.forEach(item => item.t ? item.t = 3 : '');
    console.log('modify',set,arr);
    
}

