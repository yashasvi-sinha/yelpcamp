const images = ['https://media.timeout.com/images/105658195/image.jpg', 23]
let count = 0

function changebackground() {
    switch (count) {
        case 0:
            document.body.style.backgroundImage = "url('https://i.natgeofe.com/n/8db0557c-85b6-443d-9cdc-3cbb814bbe9e/gettyimages-sb10070057l-001.jpg')"
            break
        
        case 1:
            document.body.style.backgroundImage = "url('https://www.visitflorida.com/content/dam/visitflorida/en-us/images/full-rights/PHOTO%20ICON%20CAMPING%20FISHEATING%20CREEK%20(Peter%20W.%20Cross%20and%20Patrick%20Farrell).jpg.1200.630.rendition')"
            break
        
        case 2:
            document.body.style.backgroundImage = "url('https://www.gore-tex.com/sites/default/files/blog_images/beach-camping.jpg')"
            break
        
        case 3:
            document.body.style.backgroundImage = "url('https://s16592.pcdn.co/wp-content/uploads/2020/07/Wet-Camping-tent-after-the-rain.jpg.optimal.jpg')"
            break
        
        case 4:
            document.body.style.backgroundImage = "url('https://media.timeout.com/images/105658195/image.jpg')"
            break
        
        case 5:
            document.body.style.backgroundImage = "url('https://indoretalk.com/wp-content/uploads/2019/12/camping-tech-trends_resize_md.jpg')"
            break

    }
    
    (count++) %6
    console.log(count)

    return
}

setInterval(changebackground,10000)