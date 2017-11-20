const admin = require('firebase-admin');
const twilio = require('./twilio');
const db = admin.firestore();

module.exports = (req, res) => {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input, missing phone number' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  admin
    .auth()
    .getUser(phone)
    .then(userRecord => {
      const code = Math.floor(Math.random() * 8999 + 1000);

      twilio.messages.create(
        {
          body: `Your weapon shop code is ${code}`,
          to: phone,
          from: '+16196184142',
        },
        err => {
          if (err) {
            return res.status(422).send(err);
          }

          const docRef = db.collection('users').doc(phone);
          const userRef = docRef
            .set({
              code,
              codeValid: true,
            })
            .then(ref => {
              res.send({ success: true });
            });
        }
      );
    })
    .catch(err => res.status(422).send({ error: err }));
};
