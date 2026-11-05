// Array of background colors to cycle through
const colors = ["#f4f4f9", "#e0f7fa", "#fff9c4", "#ffe0b2", "#f3e5f5", "#e8f5e9"];
let colorIndex = 0;

// DOM Elements
const colorBtn = document.getElementById("colorBtn");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// 1. Background Color Switch Functionality
colorBtn.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
});

// 2. Hamburger Menu Toggle Functionality
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});