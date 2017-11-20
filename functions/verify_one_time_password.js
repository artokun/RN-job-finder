const admin = require('firebase-admin');
const db = admin.firestore();

module.exports = function(req, res) {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: 'Phone and Code must be provided' });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = parseInt(req.body.code);

  admin
    .auth()
    .getUser(phone)
    .then(() => {
      const userRef = admin
        .firestore()
        .collection('users')
        .doc(phone);

      return userRef
        .get()
        .then(doc => {
          if (!doc.exists) {
            return Promise.reject(
              res
                .status(500)
                .send({ error: 'Phone number does not match user record' })
            );
          }

          const user = doc.data();

          if (user.code !== code || !user.codeValid) {
            return Promise.reject(
              res.status(422).send({ error: 'Code not valid' })
            );
          }

          return userRef.update({ codeValid: false });
        })
        .then(() => admin.auth().createCustomToken(phone))
        .then(token => res.send({ token }));
    })
    .catch(err => res.status(422).send({ error: err }));
};
