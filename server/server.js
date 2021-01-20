const express = require('express');
const db = require('./db')
const port = process.env.PORT || '9900'; 
const host = process.env.HOST || '0.0.0.0'; 
const app = express();
const router = require('./router.js');
//app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.listen( port, host, ()=> { console.log('lol express')});
router(app);
process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    app.close(() => {
          debug('HTTP server closed')
        })
})
