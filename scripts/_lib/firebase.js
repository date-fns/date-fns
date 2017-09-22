const firebase = require('firebase')
const {snakeCase} = require('lodash')

module.exports = {
  getFirebaseDB
}

const appEnv = process.env.APP_ENV

if (!appEnv) {
  throw new Error('APP_ENV is unset; please set to staging or production')
}

const appEnvPrefix = snakeCase(appEnv).toUpperCase()
const firebaseEmail = process.env[`${appEnvPrefix}_FIREBASE_EMAIL`]
const firebasePassword = process.env[`${appEnvPrefix}_FIREBASE_PASSWORD`]
const firebaseAPIKey = process.env[`${appEnvPrefix}_FIREBASE_API_KEY`]
const firebaseDatabaseURL = process.env[`${appEnvPrefix}_FIREBASE_DATABASE_URL`]

firebase.initializeApp({
  apiKey: firebaseAPIKey,
  databaseURL: firebaseDatabaseURL
})

function getFirebaseDB (db) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(firebaseEmail, firebasePassword)
    .then(() => firebase.database())
}
