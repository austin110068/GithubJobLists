var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github')

// crontab guru
var job = new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');  // will fetch jobs for every minute
job.start();