let arr = [
[1,2,3],
[4,5,6],
[0,8,9]
]

function diagnoal(arr) {

  let forwordIndex = 0,
  backwordIndex = arr.length - 1,
  forwardCount = 0,
  backwordCount = 0;
  forwordArr = [],
  backwordArr = [];

  for (let i = 0; i < arr.length; i++) {
    forwardCount += arr[i][forwordIndex]; 
    backwordCount += arr[i][backwordIndex];
    
    forwordArr.push(arr[i][forwordIndex]);
    backwordArr.push(arr[i][backwordIndex]);

    forwordIndex++;
    backwordIndex--
  }

  console.log(forwordArr);
  console.log(backwordArr);
  
  console.log(Math.abs(forwardCount - backwordCount))
}

diagnoal(arr)

