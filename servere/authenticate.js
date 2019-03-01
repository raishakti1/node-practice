var jwt = require('jsonwebtoken');
module.exports = function(req,res,next) {
  var token = req.headers['x-auth'];


    if (token) {
        jwt.verify(token,'abc123', function(err, decoded) {
            if (err) {
                return res.sendStatus(400).json({"error": true});
            }
           req.decoded = decoded;

            next();
        });
    } else {

        return res.sendStatus(403).json({
            "error": true
        });
    }
}
