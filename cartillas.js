const MIN = 1;
const MAX = 54;

function randomNumber(min, max) {
  var posibilitiesNumber = max - min;
  var random = Math.random() * (posibilitiesNumber + 1);
  random = Math.floor(random);
  return min + random;
}

function generateUniqNumber() {
  let uniqNumbers = []; // numeros que no se repiten
  let number = randomNumber(MIN, MAX);

  for (let i = 0; i < 16; i++) {
    while (uniqNumbers.includes(number)) {
      number = randomNumber(MIN, MAX);
    }
    uniqNumbers.push(number);
  }

  return uniqNumbers;
}

function generateNewBox() {
  let uniqNumbers = generateUniqNumber();

  for (let i = 1; i < 17; i++) {
    let imageNumber = uniqNumbers.pop();
    let box = document.getElementById(`box-${i}`);
    box.style.backgroundImage = `url('loteria/${imageNumber}.jpg')`;
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";
    box.style.backgroundSize = "100px";
  }
}
