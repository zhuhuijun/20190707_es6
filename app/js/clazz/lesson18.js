let A = 456;
let test = function () {
    console.log('test');
};
class BHello {
    test() {
        console.log('this is B');
    }
}

export default {
    A,
    test,
    BHello
}