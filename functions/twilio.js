const twilio = require('twilio');

const accountSid = 'ACf6cf3e0375cddc0635911aa3a97066b2';
const authToken = '352232d5835a3dc6b18cccd54fa476ba';

module.exports = new twilio.Twilio(accountSid, authToken);
