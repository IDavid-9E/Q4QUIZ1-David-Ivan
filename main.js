// This to calculate your BMI.
function calculateBMI() {
  // Get input values
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  // Validate input.
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("output").innerHTML = "Please enter valid numbers for weight and height.";
    return;
  }

  // Calculate your BMI.
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  // Determine your BMI's category.
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Result.
  document.getElementById("output").innerHTML = `Your BMI is ${bmi} - ${category}`;

}
