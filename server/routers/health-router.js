const express = require('express');
const router = express.Router();
const os = require('os');
const exec = require('child_process').exec;
const check_health = async (req, res) => {  await res.status('200').json({ status: [{"uptime": process.uptime()}, {"host": os.hostname()}, {"ram": exec('free -hm', (err, stdout, stderr)=> { console.log(stdout); })}]})};
router.get('/health', check_health);
module.exports = router;
