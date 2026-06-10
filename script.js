// Grab HTML elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const addProjectBtn = document.getElementById('addProjectBtn');
const projectInput = document.getElementById('projectInput');
const projectCount = document.getElementById('projectCount');

// 1. Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// 2. Interactive Project Counter
let count = 12; // Starting number from HTML

addProjectBtn.addEventListener('click', () => {
    const projectName = projectInput.value.trim();
    
    if (projectName !== "") {
        // Increase the count
        count++;
        // Update the number visible on the screen
        projectCount.textContent = count;
        
        // Clear the input box and alert success
        alert(`Project "${projectName}" added successfully!`);
        projectInput.value = "";
    } else {
        alert("Please enter a project name!");
    }
});

// Grab the new elements we created
const pageTitle = document.getElementById('pageTitle');
const mainDashboardView = document.getElementById('mainDashboardView');
const dynamicContentView = document.getElementById('dynamicContentView');
const pageDescription = document.getElementById('pageDescription');
const allLinks = document.querySelectorAll('.sidebar ul li a');

// Loop through every link in the sidebar
allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Stops the page from reloading/jumping

        // Remove the "active" highlight color from all links
        allLinks.forEach(l => l.classList.remove('active'));
        // Add the "active" highlight to the link we just clicked
        link.classList.add('active');

        const clickedTab = link.textContent; // Gets text like "Analytics" or "Settings"

        if (clickedTab === "Dashboard") {
            // Show the dashboard cards and change the title
            pageTitle.textContent = "Welcome Back, Developer!";
            mainDashboardView.style.display = "block";
            dynamicContentView.style.display = "none";
        } else {
            // Hide the dashboard cards and show custom text for the other pages
            pageTitle.textContent = clickedTab;
            mainDashboardView.style.display = "none";
            dynamicContentView.style.display = "block";

            // Customize the message based on what was clicked
            if (clickedTab === "Analytics") {
                pageDescription.innerHTML = "📊 Your coding charts, data graphs, and performance metrics will load here.";
            } else if (clickedTab === "Projects") {
                pageDescription.innerHTML = "📁 View and manage all your active repositories and codebase folders here.";
            } else if (clickedTab === "Settings") {
                pageDescription.innerHTML = "⚙️ Change your theme, profile details, and security configurations here.";
            }
        }

        // On mobile, automatically close the sidebar menu after clicking a link
        sidebar.classList.remove('active');
    });
});