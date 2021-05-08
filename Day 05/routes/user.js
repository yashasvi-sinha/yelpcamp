const express = require('express')
const router = express.Router()
const session = require('express-session')
const fileUpload = require('express-fileupload')
const UserModel = require('../models/Users')
const CampModel = require('../models/Campgrounds')
const bcrypt = require('bcrypt')

router.use(session({
    secret: "APPLE",
    resave: false,
    saveUninitialized: false
}))
router.use(fileUpload())
router.use(express.urlencoded({extended:true}))

router.get("/register", (req, res) => {
    res.render("signup")
})

router.get('/login', (req, res) => {
    res.render("login")
})


router.get("/campgrounds", (req, res) => {
    res.render("campground")
})


router.get('/campgrounds/new', (req, res) => {
    if (req.session.isloggedin == true) {
        res.render("newcampground")
        return
    }
    res.redirect("/login")
})

router.post("/signup", async (req, res) => {
    try {
        const user = await UserModel.findOne({ "username": req.body.username })
        if (user == null) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(req.body.password, salt)
            req.body.password = hash
            const newUserDoc = new UserModel(req.body)
            req.session.isloggedin = true
            const savedUserDoc = await newUserDoc.save()
            req.session.user = req.body

        }
    } catch (error) {
        console.log(error)
    }
    res.redirect("/campgrounds")
})

router.post("/login", async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username })
        const isMatching = await bcrypt.compare(req.body.password, user.password)

        if (user != null && isMatching) {
            req.session.isloggedin = true
            req.session.user = user
            res.redirect("/campgrounds")
            return
        }
    } catch (error) {
        console.log(error)

    }
    res.render('login')

})

router.post('/newground',async (req, res)=> {
    let flag = true
    console.log(req.files) 
    if (req.files) {
        try {
            let userimage = req.files.image
            userimage.mv(`./public/uploads/${userimage.md5}-${userimage.md5}`, (err) => {
                if (err) {
                    flag = false
                    res.json({uploaded: false})
                    return
                }
                req.body.image = `/uploads/${userimage.md5}-${userimage.name}`
            })
        } catch(error) {
            flag = false
            res.json({uploaded:false})
            return
        }
    }
    if (flag) {
        try {
            const newground = new CampModel(req.body)
            const saveground = await newground.save()

        } catch (error) {
            console.log(error)
        }

        res.redirect("/campgrounds")
    }
})

module.exports = router