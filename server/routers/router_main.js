const db = require('../db');
const express = require('express');
const cors = require('cors');
const router = express.Router();
const health = require('./health-router.js');
const register = require('./register.js');

const posting = async (req, res)=> { res.status('200').json(req.body.id); console.log(req.body.id); try { const result = await db.query("INSERT INTO lol (id) values ($1)", [req.body.id]); console.log(result)} catch(e) { console.log(e)}}
const getting = async (req, res)=> { const results = await db.query("select * from lol WHERE id=$1", [req.params.id]); res.status('200').json({data: 'lulzand', results: results.rows}); console.log(req.params); console.log(results.rows)}
router.get('/', (req, res)=> { res.send("proxy");});
router.post('/poster', posting);
router.get('/lol/:id', getting);
//combine router into one
//router.use(health);
router.get('/lol', async (req, res)=> { const results = await db.query("select * from lol"); res.status('200').json({status: 'great success', data: 'lulzand', results: results.rows}); 
//  console.log(req.params); console.log(results)
})
//shenenigans
const routers = [register, health, router];
const comborouter = function(app) { app.use(cors()); 
  //app.use(routers.reduce((rootRouter, router) => { rootRouter.use(router); return rootRouter}, router))

app.use(routers);
};
module.exports = comborouter;
