import * as functions from 'firebase-functions'
import {admin} from '../../../admin'
const cors = require('cors')({origin: true});

export const registerUser = functions.auth.user().onCreate(event => {
  const {uid, photoURL = '', displayName = '', email} = event.data
  admin.database().ref('users/' + uid).set({uid, photoURL, displayName, email})
});

