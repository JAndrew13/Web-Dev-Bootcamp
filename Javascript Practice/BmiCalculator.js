// Simple BMI Calculation funciton


function bmiCalculator(weight, height) {
  //input weight, height

  //calculate BMI from inputs
  var bmi = weight / (height * height);
  var interpretation = null;

  //determine outcome
  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi > 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  }
  if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}