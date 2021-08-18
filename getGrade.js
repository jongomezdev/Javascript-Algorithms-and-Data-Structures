function getGrade(score) {
  let grade;
  // Write your code here
  if (score >= 0 && score <= 5) {
    grade = 'F';
  } else if (score >= 5 && score <= 10) {
    grade = 'E';
  } else if (score >= 10 && score <= 15) {
    grade = 'D';
  } else if (score >= 15 && score <= 20) {
    grade = 'C';
  } else if (score >= 20 && score <= 25) {
    grade = 'B';
  } else {
    grade = 'A';
  }

  return grade;
}

function getGrade(score) {
  return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}

// Strings and arrays start at position 0.
// if score = 0 => 0 / 5 = 0 so the result is the first F.
function getGrade(score) {
  return 'FFEDCBA'[Math.ceil(score / 5.0)];
}
