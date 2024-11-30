const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://albertaregionalcareer-default-rtdb.firebaseio.com" // Replace this with your database URL
});

const db = admin.database();
const auth = admin.auth();

// Read users from Database
db.ref('users').once('value')
  .then(snapshot => {
    const users = snapshot.val();
    const userImportPromises = [];

    for (const userId in users) {
      const user = users[userId];

      // Add user to Firebase Authentication
      const createUserPromise = auth.createUser({
        email: user.email,
        password: user.password // Use plain text passwords
      }).then(() => {
        console.log(`Successfully imported user ${user.email}`);
      }).catch(error => {
        console.error(`Failed to import user ${user.email}:`, error);
      });

      userImportPromises.push(createUserPromise);
    }

    return Promise.all(userImportPromises);
  })
  .then(() => {
    console.log("All users have been successfully imported.");
  })
  .catch(error => {
    console.error("Error during import:", error);
  });
