// class Rotator {
//   constructor(values) {
//     this.values = values;
//   }

//   rotation() {
//     this.values.unshift(this.values.pop());
//   }

//   round() {
//     this.rotation();
//     this.render();
//   }

//   render() {
//     const [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4] = this.values;
//     const hashTable = { btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4 };

//     for (const key in hashTable) {
//       document.getElementById(key).innerHTML = hashTable[key];
//     }
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const rotator = new Rotator([1, 2, 3, 6, 9, 8, 7, 4]);
//   rotator.render();
//   document.getElementById('btn5').addEventListener('click', () => {
//     rotator.round();
//   });
// });

let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById('btn5');

btn5.onclick = function () {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById('btn' + ids[i]).innerHTML = nums[i];
  }
};
