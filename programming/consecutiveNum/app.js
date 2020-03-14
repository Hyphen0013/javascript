// find two consecutive integer in an array
let a = [23, 9, 20, 3, 22, 21, 2];
let blankArr = [];
let  b;

let sortedArr = a.sort(function(a, b) {
  if(a > b) {
    return 1;
  } else if(a < b) {
    return -1;
  } else {
    return 0
  }
});

function consecutive(a) {
  for(let i = 0; i < a.length; i++) {
    if(a[i + 1] == a[i] + 1) {
      b = [a[i], a[i + 1]];
      blankArr.push(b)
    }
  }
  return blankArr
}

consecutive(sortedArr)


// second method

const array = Object.assign({},...a.map(key => ({[key]: "x"})));
// console.log(array)
function consecutive(a,array) {

  for(let i = 0; i < a.length; i++) {

    if((a[i] in array) && ((a[i] + 1) in array)) {
      blankArr.push([a[i], a[i]+1])
    }
  }
  return blankArr
}

consecutive(a,array)

/*

// sorted array
var input = [2,3,8,1,22,5,9,7,6];

var output = [];
var inserted;

for (var i = 0, ii = input.length ; i < ii ; i++){
 
  for (var j = 0, jj = output.length ; j < jj ; j++){
     inserted = false;
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}

console.log(output);

// 2.

let a = [23, 9, 20, 3, 22, 21, 2];
function sortedArr(a) {
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < i; j++) {
      if(a[i] < a[j]) {
        var x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
    }
  }

  return a
}

sortedArr(a)

 */


