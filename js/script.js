function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function counter(counterPlayer) {
  clearCounter();
  const div = document.createElement('div');
  div.innerHTML = counterPlayer;
  document.getElementById('resultPlayer').appendChild(div);
}

function counter2(counterComputer) {
  clearCounter2();
  const div = document.createElement('div');
  div.innerHTML = counterComputer;
  document.getElementById('resultComputer').appendChild(div);
}

function clearCounter() {
  document.getElementById('resultPlayer').innerHTML = '';
}
function clearCounter2() {
  document.getElementById('resultComputer').innerHTML = '';
}

let computerMove, playerInput, playerMove, randomNumber, 
counterPlayer = 0, counterComputer = 0;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

//let buttonPaper, buttonRock, buttonScissors;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  console.log(buttonPaper + ' został kliknięty');
  console.log(buttonRock + ' został kliknięty');
  console.log(buttonScissors + ' został kliknięty');
  playerMove = argButtonName
  console.log('wybór ruchu gracza to: ' + playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if ((argPlayerMove == 'papier' && argComputerMove == 'kamień') 
  || (argPlayerMove == 'nożyce' && argComputerMove == 'papier') 
  || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')) {
    printMessage('Wygrywasz!');
    counterPlayer++;
    counter('Wygrane Gracza: ' + counterPlayer);
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
    counterComputer++;
    counter2('Wygrane Komputera: ' + counterComputer)
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
}

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });