const express = require('express')
const router = express.Router()
const UserModel = require('../models/User')

router.get('/signUp', (req, res) => {
    res.render('signup')
})


router.post('/signUp', async (req, res) => {

    try {
        
        const newUserDoc = new UserModel(req.body)

        const savedUserDoc = await newUserDoc.save()

        res.redirect('/')

    } catch (error) {
        console.log(error)
        res.send(`Internal Error Occurred: ${error._message}`)
    }

})


module.exports = router