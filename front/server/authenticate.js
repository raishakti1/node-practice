var jwt = require('jsonwebtoken');
module.exports = function(req,res,next) {
  var token = req.headers['x-auth'];

  console.log(token);


    if (token) {
        jwt.verify(token,'abc123', function(err, decoded) {
            if (err) {
                return res.json({"error": "TOKEN IS NOT VERIFIED"});
            }
            else{
          req.decoded = decoded;

          next();
        }
        });
    }
     else {

        return res.sendStatus(403).json({
            "error":"NO TOKEN"
       }
   );
    }
  }
