// Theme toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('bg-dark');
  body.classList.toggle('bg-light');
  body.classList.toggle('text-light');
  body.classList.toggle('text-dark');
}

// Live filter
function filterContent() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".filterable");

  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
