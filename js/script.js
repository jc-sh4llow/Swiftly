// Basic JavaScript for Swiftly Website
// This will be expanded when we add more functionality

// Tab switching functionality for login/register
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and forms
            tabButtons.forEach(btn => btn.classList.remove('active'));
            authForms.forEach(form => form.classList.remove('active'));
            
            // Add active class to clicked button and corresponding form
            this.classList.add('active');
            document.getElementById(targetTab + 'Form').classList.add('active');
        });
    });

    // Form submission handlers (placeholder for now)
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Placeholder for login logic
            console.log('Login submitted');
            // Will redirect to category page after implementation
            window.location.href = 'categories.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Placeholder for registration logic
            console.log('Registration submitted');
            // Will redirect to category page after implementation
            window.location.href = 'categories.html';
        });
    }
});

// Function to navigate between pages (placeholder)
function navigateToPage(page) {
    window.location.href = page;
}

// Function to handle category selection
function selectCategory(category) {
    console.log('Selected category:', category);
    // Will store selection and redirect to problem page
    localStorage.setItem('selectedCategory', category);
    window.location.href = 'problem.html';
}

// Function to handle contractor selection
function selectContractor(contractorId) {
    console.log('Selected contractor:', contractorId);
    // Will store selection and redirect to profile page
    localStorage.setItem('selectedContractor', contractorId);
    window.location.href = 'contractor-profile.html';
}

// Function to handle messaging placeholder
function openMessaging(contractorId) {
    console.log('Opening messaging with contractor:', contractorId);
    alert('Messaging system coming soon! Please contact the contractor directly using the provided information.');
}
