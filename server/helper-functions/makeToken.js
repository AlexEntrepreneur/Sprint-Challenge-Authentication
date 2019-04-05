const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET ||
'add a .env file to root of project with the JWT_SECRET variable';

function makeTokenFromUser(user) {
  const payload = {
    user_id: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  const token = jwt.sign(payload, jwtKey, options);

  return token;
}

module.exports = makeTokenFromUser;
