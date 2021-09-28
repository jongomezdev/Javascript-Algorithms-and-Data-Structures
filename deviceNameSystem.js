function deviceNamesSystem(devicenames) {
  // Write your code here
  let temp = [];

  temp.push(devicenames[0]);

  for (let x = 1; x < devicenames.length; x++) {
    let v = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].includes(devicenames[x])) {
        v++;
        console.log(v);
        console.log(temp[i]);
      }
    }
    if (v > 0) {
      temp.push(devicenames[x] + v);
    } else {
      temp.push(devicenames[x]);
    }
  }

  // console.log(temp)
  return temp;
}

let device = ['switch', 'tv', 'switch', 'tv', 'switch', 'tv'];

console.log(deviceNamesSystem(device));
