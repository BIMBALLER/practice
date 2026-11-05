// ====================== CONST ======================
function demoConst() {
  const school = "xAI Academy";
  const pi = 3.14159;

  document.getElementById("constOutput").innerHTML = 
    `const school = "${school}"<br>
     const pi = ${pi}<br><br>
     ✅ Created successfully!<br>
     ❌ You cannot change a const later (it will throw an error)`;
}

// ====================== LET ======================
let score = 0;

function demoLet() {
  score = score + 10;

  document.getElementById("letOutput").innerHTML = 
    `let score = ${score}<br><br>
     ✅ Value successfully changed!<br>
     Current score is now: <strong>${score}</strong>`;
}

// ====================== VAR ======================
function demoVar() {
  var oldMessage = "I am from the old var keyword";

  document.getElementById("varOutput").innerHTML = 
    `var oldMessage = "${oldMessage}"<br><br>
     ⚠️ This still works, but we avoid using 'var'<br>
     It has strange scoping rules and can cause bugs.`;
}

// Bonus message in console
console.log("%cVariables Lesson Loaded Successfully!", "color: #3b82f6; font-size: 16px;");
console.log("Best Practice: Use 'const' by default, 'let' only when needed.");