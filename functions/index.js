const admin = require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('./service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const createUser = require('./create_user');
const reqOneTimePW = require('./request_one_time_password');
const verifyOneTimePW = require('./verify_one_time_password');

exports.createUser = functions.https.onRequest(createUser);
exports.reqOneTimePW = functions.https.onRequest(reqOneTimePW);
exports.verifyOneTimePW = functions.https.onRequest(verifyOneTimePW);
