import * as firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCIoNRVLVT9QlWX2yY03COaZyZgr3qnclQ',
  authDomain: 'expense-tracker-ddfdc.firebaseapp.com',
  projectId: 'expense-tracker-ddfdc',
  storageBucket: 'expense-tracker-ddfdc.appspot.com',
  messagingSenderId: '214818987620',
  appId: '1:214818987620:web:e0da3377b10d3c018e4971',
}

let app
if ((firebase.apps.length === 0)) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = app.firestore()

export {auth, db}
