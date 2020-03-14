




const boxes = {
  box1: document.querySelector("#box1"),
  box2: document.querySelector("#box2"),
  box3: document.querySelector("#box3"),
  box4: document.querySelector("#box4")
};



let currentBoxNumber = 0;
const colorChangeIntervalInMs = 500;
const listOfBoxNumbers = Object.keys(boxes).map((_, index) => index+1);

const defaultColor = "#9eedff";
const highlightColor = "#1fcdf5";

const loadingInterval = setInterval(() => {
  currentBoxNumber+=1;
  if (currentBoxNumber === 5) {
  listOfBoxNumbers.forEach(boxNumber => {
      boxes[`box${boxNumber}`].style.backgroundColor = highlightColor;  
    });
    currentBoxNumber = 0;
    return;
  }
  
  listOfBoxNumbers.forEach(boxNumber => {
    boxes[`box${boxNumber}`].style.backgroundColor = defaultColor;  
  });
  
  boxes[`box${currentBoxNumber}`].style.backgroundColor = highlightColor;
}, colorChangeIntervalInMs);