function forLoop(myArray){
  for(let i = 0; i < 25; i++){
    myArray.push(`I am ${i} strange loops.`)
  }
  return myArray
}

function whileLoop(i){
  while (i > 0) {
    console.log(i);
    --i;
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(myArray){
  do {
    myArray.pop();
  } while (myArray.length >= 0 && maybeTrue());

  return myArray;
}
