var express = require('express');
var router = express.Router();
var mockjs = require('mockjs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

var makeIssuse = function () {
  var date = new Date();
  var first_issue_date = new Date();
  first_issue_date.setHours(9);
  first_issue_date.setMinutes(10);
  first_issue_date.setSeconds(0);
  var end_issue_date = new Date(first_issue_date.getTime() + 77 * 10 * 60 * 1000);

  var cur_issue, end_time, state;
  if ((date.getTime() - first_issue_date.getTime()) > 0
    && (date.getTime() - end_issue_date.getDate()) < 0) {
    //正常销售
    var cur_issue_date = new Date();
    cur_issue_date.setHours(9);
    cur_issue_date.setMinutes(0);
    cur_issue_date.setSeconds(0);
    var minutes_time = date.getTime() - cur_issue_date.getTime();
    var h = Math.ceil(minutes_time / 1000 / 60 / 10);

    var end_date = new Date(cur_issue_date.getTime() + 1000 * 60 * 10 * h);
    end_time = end_date.getTime();
    cur_issue = [end_date.getFullYear()
      , ('0' + (end_date.getMonth() + 1)).slice(-2)
      , ('0' + end_date.getDate()).slice(-2)
      , ('0' + h).slice(-2)].join('');
  } else {
    end_time = first_issue_date.getTime();
    cur_issue = [first_issue_date.getFullYear()
      , ('0' + (first_issue_date.getMonth() + 1)).slice(-2)
      , ('0' + first_issue_date.getDate()).slice(-2)
      , '01'].join('');
  }
  var cur_date = new Date();
  if (end_time - cur_date.getTime() > 1000 * 60 * 2) {
    state = "正在销售";
  } else {
    state = "开奖中";
  }
  return {
    issue: cur_issue,
    state: state,
    end_time: end_time
  };
}

router.get('/get/omit', function (req, res, next) {
  res.json(mockjs.mock({
    'data|11': [/[1~9]{1,3}|0/],
    'issue': /[1~9]{8}/
  }))
})

router.get('/get/opencode', function (req, res, next) {
  var issue = makeIssuse().issue;
  var data = mockjs.mock({
    'data': [/[1~3]/, /[4~5]/, /[6~7]/, /[8~9]/, /1[0~1]/]
  }).data;
  res.json({
    issue: issue,
    data: data
  });
})


router.get('/get/state', function (req, res, next) {
  var state = makeIssuse();
  res.json(state);
})

module.exports = router;
