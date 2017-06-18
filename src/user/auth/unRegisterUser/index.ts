import * as functions from 'firebase-functions'
import {admin} from '../../../admin'

export const unRegisterUser = functions.auth.user().onDelete(event => {
  admin.database().ref('users/' + event.data.uid).set(null)
});
