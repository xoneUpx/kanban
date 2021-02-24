module.exports = async (req, res) => { await res.status("200").json(req.body); console.log('works', req.body) };
