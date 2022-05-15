/*
Project Requirement
Change the background color by generating RANDOM rgb color by clicking a button
*/

// STEPS
// STEP 1: ONLOADER HANDELER
// STEP 2: RANDOM RGB COLOR GENERATOR FUNCTION
// STEP 3: SELECT ALL NECESSARY REFERENCES
// STEP 4: ADD LISTERNER

window.onload = () => {
    main() 
}

function main() {
    const changeColorBtn = document.querySelector('#change-btn')
    const wishColor = document.querySelector('#color-picker')
    const searchColor = document.querySelector('.search')

    changeColorBtn.addEventListener('click', function() {
        const bgColor = generateRgbColor()
        document.body.style.backgroundColor = bgColor
    })
    wishColor.addEventListener('keypress', function(event) {
        if(event.key == 'Enter') {
            let pickValueFromField = wishColor.value
            document.body.style.background = pickValueFromField

            // clear field after getting value
            wishColor.value = ''
        }
    })
    searchColor.addEventListener('click', function() {
        let pickValueFromNextElemnt = searchColor.nextElementSibling.value
        document.body.style.background = pickValueFromNextElemnt
    })

}

function generateRgbColor() {
    // rgb(0, 0, 0) rgb(255, 255, 255)
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}