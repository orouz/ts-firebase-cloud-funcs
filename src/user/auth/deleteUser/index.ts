import * as functions from 'firebase-functions'
import {admin} from '../../../admin'
const cors = require('cors')({origin: true});

/// DELETE USER
// @Input - { body: { data: { uid } } }
export const deleteUser = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
       admin
       .auth()
       .deleteUser(req.body.data.uid)
       .then(() => res.status(200))
       .catch(err => res.status(500).send(err.message))
    });
})