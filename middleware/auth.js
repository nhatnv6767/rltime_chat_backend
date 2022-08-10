const jwt = require('jsonwebtoken')


const config = process.env;

// next: execute the next func if we'll just complete successfully our logic and will execute the next func
const verifyToken = (req, res, next) => {
    let token =
        req.body.token
        || req.query.token
        || req.headers['authorization']

    if(!token) {
        return res.status(403).send("A token is required for authentication")
    }
    try {
        // remove Bearer keyword and one space (s)
        token = token.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(
            token, config.TOKEN_KEY
        )
        req.user = decoded;
    } catch (e) {
        return res.status(401).send("Invalid token")
    }

    return next()
}