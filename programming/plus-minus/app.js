let arr = [1, 3, -5, -6, 0];
let pos = [],
  neg = [],
  zero = [],
  posNum = 0,
  negNum = 0,
  zeroNum = 0,
  total = arr.length;


function check(arr) {

  for(let i = 0; i < arr.length; i++) {
    
    if(arr[i] > 0) {
      pos.push(arr[i]);
      posNum++;
    } else if(arr[i] < 0) {
      neg.push(arr[i]);
      negNum++;
    } else {
      zero.push(arr[i]);
      zeroNum++;
    }
  }
}

check(arr);
  console.log(pos);
  console.log(neg);
  console.log(zero);
  console.log("Positive: " + (posNum / total).toPrecision(6));
  console.log("Negative: " + (negNum / total).toPrecision(6));
  console.log("Zero: " + (zeroNum / total).toPrecision(6));
