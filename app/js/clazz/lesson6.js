{
    let arr = Array.of(3, 4, 5, 6, 2323, 332);
    console.log('arr=', arr);

    let empty = Array.of();
    console.log('empty', empty);
}
//Array.from //集合=>数组
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach((o) => {
        console.log(o.textContent);
    })
    console.log(Array.from([1, 3, 5], (o) => { return o * 2 }));
}
{
    console.log('fill-7', [1, 'a', undefined].fill(7));
    console.log('fill-7', [1, 'a', undefined, 5, '34'].fill('nn', 1, 3));

}
{
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }

    for (let index of ['1', 'c', 'ks'].values()) {
        console.log('val', index);
    }
    for (let [index, val] of ['1', 'c', 'ks'].entries()) {
        console.log('key', index, 'val', val);
    }
}

{
    console.log([1, 2, 4, 5, 75, 32, 3].copyWithin(0, 3, 4));
    console.log([1, 2, 3, 4, 5].find(o => { return o > 3 }));
    console.log([1, 2, 3, 4, 5].findIndex(o => { return o > 3 }));
}


{
    console.log('number', [1, 2, NaN].includes(1));
    console.log('number', [1, 2, NaN].includes(NaN));

}