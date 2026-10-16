const score = 85;
let grade;

if (score < 0 || score > 100) {
  console.log("Invalid Score");
} else {
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else if (score >= 50) {
    grade = "E";
  } else {
    grade = "F";
  }

  console.log("Score: ", score);
  
  switch(grade) {
    case "A": 
    case "B":
    case "C":
    case "D":
    case "E":
    case "F":
      console.log("Grade: ", grade);
      break;
  }

  console.log("Status: ", score >= 40 ? "Passed" : "Failed");
}