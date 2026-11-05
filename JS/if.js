// =============================================
// LESSON 3: CONDITIONALS (if, else if, else)
// =============================================

function checkAge() {
    const ageInput = document.getElementById("ageInput").value;
    const result = document.getElementById("ageResult");
    
    const age = Number(ageInput);

    if (age >= 18) {
        result.innerHTML = `✅ You are ${age} years old.<br>You are eligible to vote!`;
        result.style.color = "green";
    } 
    else if (age >= 13) {
        result.innerHTML = `🟡 You are ${age} years old.<br>You are a teenager.`;
        result.style.color = "orange";
    } 
    else if (age > 0) {
        result.innerHTML = `🔴 You are ${age} years old.<br>You are too young to vote.`;
        result.style.color = "red";
    } 
    else {
        result.innerHTML = "❌ Please enter a valid age.";
        result.style.color = "black";
    }
}

function calculateGrade() {
    const scoreInput = document.getElementById("scoreInput").value;
    const result = document.getElementById("gradeResult");
    
    const score = Number(scoreInput);

    if (score >= 90 && score <= 100) {
        result.innerHTML = `🎉 Excellent! Your grade is <strong>A</strong>`;
        result.style.color = "green";
    } 
    else if (score >= 80) {
        result.innerHTML = `👍 Good Job! Your grade is <strong>B</strong>`;
        result.style.color = "#22c55e";
    } 
    else if (score >= 70) {
        result.innerHTML = `🟡 Your grade is <strong>C</strong>`;
        result.style.color = "orange";
    } 
    else if (score >= 60) {
        result.innerHTML = `🟠 Your grade is <strong>D</strong>`;
        result.style.color = "#f59e0b";
    } 
    else if (score >= 0) {
        result.innerHTML = `❌ Your grade is <strong>F</strong>. You need to study more.`;
        result.style.color = "red";
    } 
    else if (score===0) { 
        result.innerHTML = "❌ Please enter a valid score between 0 and 100.";
        result.style.color = "black";
    }
    else {
        result.innerHTML = "❌ Please enter a valid score between 0 and 100.";
        result.style.color = "black";
    }
}