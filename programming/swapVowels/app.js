// Reverse Vowels of a String ~ Write a function that takes a string as input and reverse only the vowels of a string.
// 1st approach 
function reverseVol1(arr) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let reversed = [];
  let findvowels = [];

  for(let i = 0; i < arr.length; i++) {
    if(vowels.has(arr[i])) {
      findvowels.push(arr[i])
      console.log(findvowels)
    }
  }

  for(let i = 0; i < arr.length; i++) {
    if(vowels.has(arr[i])) {
      reversed.push(findvowels.pop())
    } else {
      reversed.push(arr[i]);
    }
  }

  console.log(reversed.join(''));
}
reverseVol1("HyphenCall") // 97% faster complexity O(2N) -> O(N)

// 2nd approach
function reverseVol2(arr) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  arr = arr.toLowerCase().split('');
  let front = 0;
  let back = arr.length - 1

  while(front < back) {
    console.log(vowels.has(arr[back]))
    if(!vowels.has(arr[front])) {
      front++;
      continue;
    } 
    if(!vowels.has(arr[back])) {
      back--;
      continue;
    }

    let temp = arr[front];
    arr[front] = arr[back];
    arr[back] = temp;
    front++;
    back--;
  }

  console.log(arr.join(''));
  return arr.join('');
}
reverseVol2("HyphenCall")  // 98.89% faster

// 3rd appraoch
var reverseVol3 = function(s) {
    s = s.split('');
    let front = 0;
    let back = s.length - 1;
    while (front < back) {
        if (s[front] !== 'a' &&
            s[front] !== 'e' &&
            s[front] !== 'i' &&
            s[front] !== 'o' &&
            s[front] !== 'u' &&
            s[front] !== 'A' &&
            s[front] !== 'E' &&
            s[front] !== 'I' &&
            s[front] !== 'O' &&
            s[front] !== 'U') {
            front++;
            continue;
        }
        if (s[back] !== 'a' &&
            s[back] !== 'e' &&
            s[back] !== 'i' &&
            s[back] !== 'o' &&
            s[back] !== 'u' &&
            s[back] !== 'A' &&
            s[back] !== 'E' &&
            s[back] !== 'I' &&
            s[back] !== 'O' &&
            s[back] !== 'U') {
            back--;
            continue;
        }
        let temp = s[front];
        s[front++] = s[back];
        s[back--] = temp;
    }
    return s.join('');
};

reverseVol3("HyphenCall"); // 100% faster