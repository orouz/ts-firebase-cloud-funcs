import * as functions from 'firebase-functions'
import {admin} from '../../../admin'
const cors = require('cors')({origin: true});


export const createUser: functions.HttpsFunction = 
    functions.https.onRequest((req: CreateUserRequest, res: functions.Response): void => {
        cors(req, res, () => {
        admin
        .auth()
        .createUser(req.body.data)
        .then(userRecord => res.json({userRecord}))
        .catch(err => res.status(500).send(err.message))
        });
})


export interface CreateUserRequest extends functions.Request {
    body: {
        data: {
            email: string 
            password: string 
            displayName: string 
            photoURL?: string  
            [key: string]:any
        }
    }  
    [key: string]:any
}

