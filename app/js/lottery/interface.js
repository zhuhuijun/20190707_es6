import $ from 'jquery';
class Interface {
    /**
     * 获得遗漏数据
     * @param {string} issue [当前期号]
     */
    getOmit(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    self.setOmit(res.data);
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        });
    }
    /**
     * 
     */
    getOpenCode(issuse) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data: { issuse: issuse },
                dataType: 'json',
                success: function (res) {
                    self.setOpenCode(res.data);
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            });
        });
    }
    /**
     * 获得状态
     * @param {int} issuse 期号
     */
    getState(issuse) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data: { issuse: issuse },
                dataType: 'json',
                success: function (res) {
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            });
        });
    }
}

export default Interface