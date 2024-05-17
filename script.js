function checkEligibility() {
    // Prevent the form from reloading after submitting 
    event.preventDefault();
    
    // Retrieve values from form input
    let age = document.getElementById("age").value;
    let isMember = document.getElementById("membership").checked;
    let message;
    
    // Convert age to a number
    age = Number(age);
    
    // Check eligibility for discounts using conditional statements
    if (age >= 65) {
        message = "Eligible for Senior Discount 😊";
    } else if (age>= 18 && isMember) {
        message = "Eligible for Member Discount 😉";
    } else {
        message = "Not eligible for any discounts ☹";
    }

    document.getElementById("output").innerText = message;
}