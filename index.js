function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var temp = string;
  if(temp.toLowerCase() === string){
    return "I can't hear you!"
  }
  else if (temp.toUpperCase() === string)
  {
    return "YES INDEED!"
  }
  else {
    return "I love you too."
  }
}
