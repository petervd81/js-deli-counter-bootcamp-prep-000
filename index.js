var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    var retStr = "There is nobody waiting to be served!";
  } else {
    var retStr = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    
  }
  return retStr;
}