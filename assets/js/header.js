// document.addEventListener("DOMContentLoaded", function () {
//   const menuBtn = document.querySelector(".btn-header"); // Change the selector to match the button class
//   const menuContent = document.getElementById("menu-content");

//   // Event listener for menu button click
//   menuBtn.addEventListener("click", function () {
//     // Toggle the display of menu content
//     menuContent.style.display =
//       menuContent.style.display === "block" ? "none" : "block";
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".btn-header");
  const menuContent = document.getElementById("menu-content");
  const closeBtn = document.getElementById("close-btn");

  // Function to toggle menu content visibility
  function toggleMenu() {
    menuContent.style.display =
      menuContent.style.display === "block" ? "none" : "block";
  }

  // Event listener for menu button click
  menuBtn.addEventListener("click", toggleMenu);

  // Event listener for close button click
  closeBtn.addEventListener("click", function () {
    // Hide the menu content
    menuContent.style.display = "none";
  });
});
