import { log } from "util";

{
    let item = { t: 2 };
    let map = new Map();
    let set = new Set();
    let obj = {};
    //add
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1
    console.log('map-set-obj', map, set, obj);
    //查找
    console.log({
        map_exists: map.has('t'),
        set_has: set.has(item),
        obj_exists: 't' in obj
    });
    //改变
    map.set('t', 2);
    item.t = '2';
    obj['t'] = 2;
    console.log('map-set-obj', map, set, obj);
    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('delete', map, set, obj);

}