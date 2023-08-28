const jwt=require('jsonwebtoken')
function tokenauth(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader) {
        res.status(401).send('Unauthorized');
        return;
    }

    const tokens = authorizationHeader.split(' ');

    if (tokens.length !== 2 || tokens[0] !== 'Bearer') {
        res.status(401).send('Unauthorized: Invalid token format');
        return;
    }

    const authtoken = tokens[1];

    try {
        const valid = jwt.verify(authtoken, 'secret');
        if (valid) {
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (error) {
        console.log('Token verification error:', error.message);
        res.status(401).send('Unauthorized: Invalid token');
    }
}
module.exports={
    tokenauth
}