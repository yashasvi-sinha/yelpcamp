const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const UserModel = require('../models/User')



router.get('/', (req, res) => {
    console.log('Request for Get request for HomePage')
    res.render('home')
})

router.post('/campgrounds',(req, res) => {
    console.log('Request for Post request for Camp Upload page')
    res.render('camp')
} )


router.post('/save', upload.single('image') ,async (req, res) => {

    let data = {
        name : req.body.name,
        price: req.body.price,
        location : req.body.location,
        image : req.file.path,
        description : req.body.description,
        createAt : Date.now
    }

     try {

        const newUserDoc = new UserModel(data)

        const savedUserDoc = await newUserDoc.save()
        
        console.log('Data Savedto DB')

        res.redirect('/')
        
    } catch (error) {
        console.log(error)
        res.send(`Internal error ${error._message}`)
        
    }
    
})

// router.get('/signUp', (req, res) => {
//     res.render('signup')
// })


// router.post('/signUp', async (req, res) => {

//     try {
        
//         const newUserDoc = new UserModel(req.body)

//         const savedUserDoc = await newUserDoc.save()

//         res.redirect('/')

//     } catch (error) {
//         console.log(error)
//         res.send(`Internal Error Occurred: ${error._message}`)
//     }

// })


module.exports = router