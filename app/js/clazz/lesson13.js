{
    let ajax = function (callback) {
        console.log('doing');
        setTimeout(function () {
            callback && callback.call();
        }, 1000);
    };
    ajax(function () {
        console.log('timeout1');
    });
}
//promise
{
    let ajax = function () {
        console.log('doing...');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };
    ajax().then(function () {
        console.log('promise', 'timeout2');
    });
}

{
    let ajax = function () {
        console.log('doing...');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };
    ajax()
        .then(function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log('this is 2');
                    resolve();
                }, 2000);
            });
        })
        .then(function () {
            console.log('timeout3');
        });
}

{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise((resolve, reject) => {
            if (num > 5) {
                resolve();
            } else {
                throw new Error('出错了,the num must bigger than five');
            }
        })
    };
    ajax(2).then(function () {
        console.log('this is', 6);
    }).catch(function (err) {
        console.error('catch',err);
    });
}