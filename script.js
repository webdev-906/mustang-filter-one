// Array that will be referenced with style attributes
// none and block 
const showImage = ['none', 'block'];


// arrow function name: showBlackMustangs 
// paramaters: none 
// functionality: selecting the id element blackMustang and changing the display to block which will make the element reappear
const showBlackMustangs = () => {
  blackMustangs = document.getElementById('blackMustang').style.display = showImage[1]
}

//Same as above function 
const showRedMustangs = () => {
  redMustangs = document.getElementById('redMustang').style.display = showImage[1]
}

// Same as above function
const showSilverMustangs = () => {
  silverMustangs = document.getElementById('silverMustang').style.display = showImage[1]
}

// name: clearAll
// parameters: none 
// functionality: Changing the display block to none which will make the id elements disappear within the browser
const clearAll = () => {
  const carIds = ['blackMustang', 'redMustang', 'silverMustang'];
  document.getElementById(carIds[0]).style.display = showImage[0]
  document.getElementById(carIds[1]).style.display = showImage[0]
  document.getElementById(carIds[2]).style.display = showImage[0]
}







