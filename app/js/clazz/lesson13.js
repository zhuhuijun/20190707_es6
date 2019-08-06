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
    ajax(6).then(function () {
        console.log('this is', 6);
    }).catch(function (err) {
        console.error('catch', err);
    });
}


{
    //所有图片加载完再增加到页面
    function LoadImage(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            }
        });
    }

    function ShowImages(imges) {
        imges.forEach(element => {
            document.body.appendChild(element);
        });
    }

    Promise.all([
        LoadImage('http://h.hiphotos.baidu.com/lvpics/w=600/sign=5dc3621e19d5ad6eaaf967eab1c939a3/0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg'),
        LoadImage('http://h.hiphotos.baidu.com/lvpics/w=600/sign=5dc3621e19d5ad6eaaf967eab1c939a3/0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg'),
        LoadImage('http://h.hiphotos.baidu.com/lvpics/w=600/sign=5dc3621e19d5ad6eaaf967eab1c939a3/0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg')
    ]).then(ShowImages);
}


{
    function LoadImage(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            }
        });
    }

    function ShowImages(imges) {
        let p = document.createElement('p');
        p.appendChild(imges);
        document.body.appendChild(p);
    }

    Promise.race([
        LoadImage('http://h.hiphotos.baidu.com/lvpics/w=600/sign=5dc3621e19d5ad6eaaf967eab1c939a3/0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg'),
        LoadImage('http://h.hiphotos.baidu.com/lvpics/w=600/sign=5dc3621e19d5ad6eaaf967eab1c939a3/0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg'),
        LoadImage('http://h.hiphotos.baidu.com/lvpics/w=600/sign=5dc3621e19d5ad6eaaf967eab1c939a3/0b55b319ebc4b745cc71eecccdfc1e178b821506.jpg')
    ]).then(ShowImages);
}