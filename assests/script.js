// Theme toggle
function toggleTheme() {
  const body = document.body;
  const themeButton = document.querySelector('button[onclick="toggleTheme()"]');
  
  if (body.classList.contains('bg-light')) {
    // Switch to dark theme
    body.classList.remove('bg-light', 'text-dark');
    body.classList.add('bg-dark', 'text-light');
    themeButton.classList.remove('btn-outline-dark');
    themeButton.classList.add('btn-outline-light');
  } else {
    // Switch to light theme
    body.classList.remove('bg-dark', 'text-light');
    body.classList.add('bg-light', 'text-dark');
    themeButton.classList.remove('btn-outline-light');
    themeButton.classList.add('btn-outline-dark');
  }
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

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set initial theme to light
  const body = document.body;
  const themeButton = document.querySelector('button[onclick="toggleTheme()"]');
  
  if (!body.classList.contains('bg-dark') && !body.classList.contains('bg-light')) {
    body.classList.add('bg-light', 'text-dark');
    themeButton.classList.add('btn-outline-dark');
  }
});
