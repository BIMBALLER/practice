// =============================================
// LESSON 4: FUNCTIONS
// =============================================

// 1. Simple Function with Parameter
function sayHello() {
    const nameInput = document.getElementById("nameInput").value;
    const result = document.getElementById("greetingResult");

    if (nameInput.trim() !== "") {
        result.innerHTML = `Hello <strong>${nameInput}</strong>! 👋<br>Welcome to JavaScript class!`;
        result.style.color = "#166534";
    } else {
        result.innerHTML = "⚠️ Please enter your name.";
        result.style.color = "red";
    }
}

// 2. Function with Multiple Parameters + Return
function addNumbers(a, b) {
    return a + b;
}

function calculateSum() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const result = document.getElementById("calcResult");

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = addNumbers(num1, num2);
        result.innerHTML = `${num1} + ${num2} = <strong>${sum}</strong>`;
        result.style.color = "#166534";
    } else {
        result.innerHTML = "⚠️ Please enter valid numbers in both fields.";
        result.style.color = "red";
    }
}

// 3. Arrow Function Example (for console)
const multiply = (x, y) => x * y;

console.log("Arrow Function Test:", multiply(5, 6)); // 30