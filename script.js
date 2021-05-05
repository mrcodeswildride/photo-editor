let image = document.getElementById(`image`)

let width100Button = document.getElementById(`width100Button`)
let width200Button = document.getElementById(`width200Button`)
let width300Button = document.getElementById(`width300Button`)
let widthParagraph = document.getElementById(`widthParagraph`)

let opacity25Button = document.getElementById(`opacity25Button`)
let opacity50Button = document.getElementById(`opacity50Button`)
let opacity75Button = document.getElementById(`opacity75Button`)
let opacityParagraph = document.getElementById(`opacityParagraph`)

let rotation90Button = document.getElementById(`rotation90Button`)
let rotation180Button = document.getElementById(`rotation180Button`)
let rotation270Button = document.getElementById(`rotation270Button`)
let rotationParagraph = document.getElementById(`rotationParagraph`)

width100Button.addEventListener(`click`, changeWidth100)
width200Button.addEventListener(`click`, changeWidth200)
width300Button.addEventListener(`click`, changeWidth300)

opacity25Button.addEventListener(`click`, changeOpacity25)
opacity50Button.addEventListener(`click`, changeOpacity50)
opacity75Button.addEventListener(`click`, changeOpacity75)

rotation90Button.addEventListener(`click`, changeRotation90)
rotation180Button.addEventListener(`click`, changeRotation180)
rotation270Button.addEventListener(`click`, changeRotation270)

function changeWidth100() {
  image.style.width = `100px`
  widthParagraph.innerHTML = `Selected width: 100 pixels`
}

function changeWidth200() {
  image.style.width = `200px`
  widthParagraph.innerHTML = `Selected width: 200 pixels`
}

function changeWidth300() {
  image.style.width = `300px`
  widthParagraph.innerHTML = `Selected width: 300 pixels`
}

function changeOpacity25() {
  image.style.opacity = `25%`
  opacityParagraph.innerHTML = `Selected opacity: 25%`
}

function changeOpacity50() {
  image.style.opacity = `50%`
  opacityParagraph.innerHTML = `Selected opacity: 50%`
}

function changeOpacity75() {
  image.style.opacity = `75%`
  opacityParagraph.innerHTML = `Selected opacity: 75%`
}

function changeRotation90() {
  image.style.transform = `rotate(90deg)`
  rotationParagraph.innerHTML = `Selected rotation: 90 degrees`
}

function changeRotation180() {
  image.style.transform = `rotate(180deg)`
  rotationParagraph.innerHTML = `Selected rotation: 180 degrees`
}

function changeRotation270() {
  image.style.transform = `rotate(270deg)`
  rotationParagraph.innerHTML = `Selected rotation: 270 degrees`
}
