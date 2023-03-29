function countTime(leds) {
    let arr = leds.join("").split("1")
    arr[0] += arr.pop()
    return Math.max(...arr.map((led) => led.length)) * 7
 }

  const leds = [0,0,0,1,0,1,0,1,0,0]
  console.log(countTime(leds))

  // DONE COMPLETLY. IT'S IMPORTANT TO REVIEW IT AGAIN