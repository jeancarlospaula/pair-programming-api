const admin = require('firebase-admin')
const path = require('path')
const crypto = require('crypto')

const bucketURL = process.env.FIREBASE_BUCKET_URL

const firebase_private_key = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
console.log(firebase_private_key)

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: firebase_private_key
  }),
  storageBucket: bucketURL
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
    if(!req.file) return next();

    const image = req.file
    const nomeArquivo = crypto.randomBytes(16).toString('hex') + path.extname(image.originalname)

    const file = bucket.file(nomeArquivo)

    const stream = file.createWriteStream({
        metadata: {
            contentType: image.mimetype,
        }
    })

    stream.end(image.buffer)
    
    stream.on('finish', async () => {
        await file.makePublic()
        
        req.file.firebaseUrl = `https://storage.googleapis.com/${bucketURL}/${nomeArquivo}`
        
        next()
    })

    stream.on('error', (e) => console.error(e))
}

module.exports = uploadImage
