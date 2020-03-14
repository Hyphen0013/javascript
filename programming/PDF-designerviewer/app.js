let h = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
let word = "peak";
function designerPdfViewer(h, word) {
  
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let letterHeight = [];
  
  for (let i = 0; i < word.length; i++){
    letterHeight.push(h[letters.indexOf(word[i])]);
  }
  
  let tallest = letterHeight.sort()[letterHeight.length-1];
  
  return tallest * word.length;
  
}

designerPdfViewer(h, word)