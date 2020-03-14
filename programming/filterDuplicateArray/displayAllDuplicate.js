let arr = [1, 2, 1, 2, 1, 2, 3]
function removeDuplicate(arr) { 

  var result = [];        
  var obj = {};      
            
  for (let c = 0; c < arr.length; c++)  {            
      obj[arr[c]] = 0;        
  }

  for (c in obj) {            
      result.push(c);        
  }  
  return result;      
} 

removeDuplicate(arr)