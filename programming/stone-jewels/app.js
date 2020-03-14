// Jewels and Stones ~ You're given strings J representing the types of stones that are jewels, and S representing the stones you have. Each character in S is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Nested loop give high complexity
// Solution 1st
function stoneJewel1(j, s) {
  var myJewel = 0;
  // Jewels
  for(let i = 0; i < j.length; i++) {
    // Stone
    for(let k = 0; k < s.length; k++) {
      // stone which is also jewels
      if(j[i] == s[k]) {
        myJewel++;
      }
    }
  }

  return myJewel;
}

stoneJewel1([1, 2, 4, 6, 7, 8], [1, 4, 5, 6 ,7]) // O(N^2)


// Solution 2nd
function stoneJewel2(j, s) {
  let sets = new Set(j);
  let myJewel = 0;

  for(let i = 0; i < s.length; i++) {
    if(sets.has(s[i])) {
      myJewel++;
    }
  }
  return myJewel;
}
stoneJewel2([1, 2, 4, 6, 7, 8], [1, 4, 5, 6 ,7]) // O(N)
// complexity of set are O(1)

// type 3
var stoneJewel3 = function(J, S) {
    const jewels = new Int8Array(59);
    for (var i = 0; i < J.length; i++) {
        jewels[J.charCodeAt(i)-65] = 1;
    }
    let myJewels = 0;
    for (var i = 0; i < S.length; i++) {
        if (jewels[S.charCodeAt(i)-65] === 1) {
            myJewels++;
        }
    }
    return myJewels;
};
stoneJewel3('hyphen', 'hifun'); // complexity 100% faster