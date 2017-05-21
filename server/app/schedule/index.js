const schedule = require('node-schedule')
const data = require('./data')

// 每分钟执行一次
const rule = {
  start: new Date(Date.now()),
  rule: '*/30 * * * *'
  // rule: '*/1 * * * * *',
  // end: new Date(+new Date() + 1200)
}
schedule.scheduleJob(rule, () => {
  console.log('spider data start')
  data.getAll()
})
