{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    let target = 'xyz123';
    console.log(regex.test('xyz123'),regex2.test(target));

    let regex3 = new RegExp(/xyz/ig,'i');
    console.log(regex3.flags);
    
}
//shift+alt +up
//alt+up 上移
{
    let s="bbb_bb_b";
    let a1=/b+/g;
    let a2=/b+/y;

    console.log('one',a1.exec(s),a1.exec(s));
    console.log('two',a2.exec(s),a2.exec(s));
    console.log('a1:'+a1.sticky);
    console.log('a2:'+a2.sticky);
    
}

{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDCA2'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDCA2'));

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));
    
    
    console.log(`\u{20BB7}`);
    let s='𠮷𠮷';
    console.log('u',/^.$/.test(s));
    //包含（wynk）超过两个字节的
    console.log('u-2',/^.$/u.test(s));


    console.log('test',/𠮷{2}/.test(s));
    console.log('test-u',/𠮷{2}/u.test(s));
    
    
}