{
    console.log('a', '\u0061');
    console.log('s', '\u20BB7');
    console.log('s', '\u{20BB7}');
    console.log('s𠮷');

}
{
    let s = '𠮷';
    console.log('length', s.length);
    console.log('0', s.charAt(0));
    //ctrl+enter
    //shift + ctrl +enter
    console.log('1', s.charAt(1));
    //取码值
    console.log('code0', s.charCodeAt(0));
    //只取两个字节
    console.log('code1', s.charCodeAt(1));
    let s1 = "𠮷a";
    console.log('codees60', s1.codePointAt(0));
    console.log('codees60', s1.codePointAt(0).toString(16));
    console.log('codees61', s1.codePointAt(1));
    console.log('codees61', s1.codePointAt(1).toString(16));
    console.log('codees60', s1.codePointAt(0).toString(16));

    console.log('codees62', s1.codePointAt(2));
    console.log('codees62', s1.codePointAt(2).toString(16));

    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));

}

{
    let str = "\u{20bb7}abc";
    for (let i = 0; i < str.length; i++){
        console.log("es5:%s",str[i]);
    }

    for(let code of str){
        console.log("es6:%s",code);
    }
}