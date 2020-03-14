function keyValueArryaPair(object) {
  Object.keys(object).map((el) => {
    let output = [el, object[el]]
    console.log(output)
  })
}

keyValueArryaPair({x: 2, y: 3});