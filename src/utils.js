/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} arr The array to shuffle
 * @return {Array}     The new array
 */
export const shuffle = function (arr) {
    let array = arr.slice();
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  
  export const formatTime = function (secondsPassed) {
    let hours = Math.floor(secondsPassed / 60 / 60);
    let minutes = Math.floor((secondsPassed % (60 * 60)) / 60);
    let seconds = secondsPassed % 60;
  
    if (hours) {
      return `${hours} hours ${minutes} minutes ${seconds} seconds`;
    } else if (minutes) {
      return `${minutes} minutes ${seconds} seconds`;
    } else {
      return `${seconds} seconds`;
    }
  };
  