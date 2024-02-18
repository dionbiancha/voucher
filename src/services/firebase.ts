import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAnAXaQsncNsn7F-pT2pv5bziYotzrvg1A',
  authDomain: 'voucher-d5888.firebaseapp.com',
  projectId: 'voucher-d5888',
  storageBucket: 'voucher-d5888.appspot.com',
  messagingSenderId: '320263419978',
  appId: '1:320263419978:web:4c1344470e14013d42ceb3',
  measurementId: 'G-7WNH9X6RJT'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)
