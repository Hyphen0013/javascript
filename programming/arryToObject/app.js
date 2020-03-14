// first method from map()
let a = [23, 9, 20, 3, 22, 21, 2];

const array = Object.assign({}, ...a.map(key => ({[key]: "x"})));


// with for loop
  key = "x",
  obj = {};
  
for(let i = 0; i < a.length; i++) {
  obj[a[i]]=key
}

console.log(obj)
console.log(array)

