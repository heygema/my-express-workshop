// @flow

require('dotenv').config();

const PORT = process.env.PORT || 6060;
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const SECRET = process.env.SECRET;

export {PORT, CONNECTION_STRING, SECRET};
