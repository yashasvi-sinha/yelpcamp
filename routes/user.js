const express = require('express')
const fileUpload = require("express-fileupload")
const router = express.Router()
const UserModel = require('../models/User')
const NewUserModel = require('../models/User')

router.use(fileUpload())

router.get("/home", (req, res) => {
    console.log("Landing page Started")
    res.render("landingPage")
})

router.get('/signUp', (req, res) => {
    res.render('signup')
})

router.get("/campgrounds", (req, res) => {
    console.log("Received Campgrounds Page Request")
    res.render("campgrounds")
})
router.get("/campgrounds/new", (req, res) => {
    console.log("Received Add New Page Request")
    res.render("new")
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

let global_data = {}
router.post("/campgrounds", async(req, res) => {
    console.log("Added New Campgrounds")
    let myFile = req.files.filename
    const {campName, price, location, description} = req.body
    const data = {
        campName,
        price,
        location,
        "imageUrl": `campImages/${myFile.name}`,
        description
    }
    console.log(data)
    global_data = data
    try {
        const newCampgrounds = new NewUserModel(global_data)
        const savednewCampgrounds = await newCampgrounds.save()
        myFile.mv(`./campImages/${myFile.name}`, (err) => {
            if (err) {
                res.send({uploaded: false})
                return
            }
            res.render('campgrounds')
        })
    } catch (error) {
        console.log(error)
        res.send(`Internal Error Occurred: ${error._message}`)
    }
})


module.exports = router