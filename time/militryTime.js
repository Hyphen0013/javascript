  let time = new Date()
  let s = "";
  let h = time.getHours().toString();
  let m = time.getMinutes();
  let sec = time.getSeconds();
  let fullTime = `${s.concat(h)}:${s.concat(m)}:${s.concat(sec)}PM`

  console.log(time.toTimeString());

function timeCheck() {

  let time = new Date()
  let s = "";
  let h = time.getHours().toString();
  let m = time.getMinutes();
  let sec = time.getSeconds();
  let fullTime = `${s.concat(h)}:${s.concat(m)}:${s.concat(sec)}PM `

  // let fullTime = "11:00:01AM"
  let hour = fullTime.substring(0, 2) * 1;
  let timeFormat = fullTime.substring(2, 8)

  if(hour === 12 && fullTime.indexOf("AM") !== -1) {
    return("00" + timeFormat);
  } 
  
  if(hour === 12 && fullTime.indexOf("PM") !== -1) {
    return (hour + timeFormat)
  }

  if(hour < 12 && fullTime.indexOf("PM") !== -1) {
    return (12 + hour + timeFormat);
  } else {
    if(hour < 10) {
      return ("0" + hour + timeFormat);
    } else {
      return (hour + timeFormat)
    }
  }
}
timeCheck()
