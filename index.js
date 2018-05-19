var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  
  return `Welcome, ${name}. You are number ${place} in line.`;
}