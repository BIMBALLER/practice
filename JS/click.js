// 1. Click Event
const clickBtn = document.getElementById("clickBtn");
const clickResult = document.getElementById("clickResult");

clickBtn.addEventListener("click", function () {
  clickResult.textContent = "✅ Button was clicked!";
  clickResult.style.color = "green";
});

// 2. Input Event (runs every time user types)
const nameInput = document.getElementById("nameInput");
const inputResult = document.getElementById("inputResult");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;

  if (value.trim() === "") {
    inputResult.textContent = "Waiting for input...";
  } else {
    inputResult.textContent = `Hello, ${value}!`;
  }
});

// 3. Mouse Events
const hoverBox = document.getElementById("hoverBox");
const hoverResult = document.getElementById("hoverResult");

hoverBox.addEventListener("mouseover", function () {
  hoverResult.textContent = "Mouse is over the box!";
  hoverBox.style.background = "#86efac";
});

hoverBox.addEventListener("mouseout", function () {
  hoverResult.textContent = "Mouse left the box.";
  hoverBox.style.background = "#e0f2fe";
});

// Bonus: Using Arrow Function
clickBtn.addEventListener("dblclick", () => {
  alert("You double-clicked the button!");
});