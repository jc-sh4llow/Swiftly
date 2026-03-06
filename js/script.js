// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const authSwitches = document.querySelectorAll('.auth-switch a');

// Tab switching functionality
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Remove active class from all tabs and forms
        tabBtns.forEach(tab => tab.classList.remove('active'));
        authForms.forEach(form => form.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding form
        btn.classList.add('active');
        document.getElementById(`${targetTab}-form`).classList.add('active');
    });
});

// Auth switch links
authSwitches.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = link.getAttribute('data-tab');
        
        // Remove active class from all tabs and forms
        tabBtns.forEach(tab => tab.classList.remove('active'));
        authForms.forEach(form => form.classList.remove('active'));
        
        // Add active class to target tab and form
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(`${targetTab}-form`).classList.add('active');
    });
});

// Form submissions (placeholder for future Firestore integration)
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Placeholder: In real implementation, this would connect to Firestore
    console.log('Login attempt:', { email, password });
    
    // Simulate successful login and redirect
    alert('Login successful! (This is a placeholder - would connect to Firestore)');
    window.location.href = 'categories.html';
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Basic validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Placeholder: In real implementation, this would connect to Firestore
    console.log('Registration attempt:', { name, email, phone, password });
    
    // Simulate successful registration and redirect
    alert('Registration successful! (This is a placeholder - would connect to Firestore)');
    window.location.href = 'categories.html';
});

// Utility functions for future Firestore integration
const firebaseUtils = {
    // Placeholder for Firebase initialization
    initFirebase: () => {
        // Future: Initialize Firebase here
        console.log('Firebase would be initialized here');
    },
    
    // Placeholder for user authentication
    loginUser: async (email, password) => {
        // Future: Firebase auth login
        console.log('Would login user:', email);
    },
    
    // Placeholder for user registration
    registerUser: async (userData) => {
        // Future: Firebase auth registration
        console.log('Would register user:', userData);
    },
    
    // Placeholder for logout
    logoutUser: async () => {
        // Future: Firebase auth logout
        console.log('Would logout user');
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Swiftly website loaded');
    // Future: Initialize Firebase when ready
    // firebaseUtils.initFirebase();
});

// Navigation helper functions
const navigation = {
    goToCategories: () => {
        window.location.href = 'categories.html';
    },
    
    goToProblem: (category) => {
        window.location.href = `problem.html?category=${encodeURIComponent(category)}`;
    },
    
    goToCandidates: (category, subcategory) => {
        window.location.href = `candidates.html?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`;
    },
    
    goToProfile: (contractorId) => {
        window.location.href = `profile.html?id=${contractorId}`;
    }
};

// Data structure for Firestore migration (placeholder)
const dataStructure = {
    users: {
        userId: {
            name: 'string',
            email: 'string',
            phone: 'string',
            createdAt: 'timestamp',
            userType: 'customer|contractor'
        }
    },
    
    categories: {
        categoryId: {
            name: 'string',
            icon: 'string',
            description: 'string',
            subcategories: ['subcategoryIds']
        }
    },
    
    subcategories: {
        subcategoryId: {
            name: 'string',
            categoryId: 'string',
            description: 'string'
        }
    },
    
    contractors: {
        contractorId: {
            userId: 'string',
            businessName: 'string',
            specialties: ['string'],
            description: 'string',
            rating: 'number',
            reviewCount: 'number',
            contactInfo: {
                phone: 'string',
                email: 'string',
                address: 'string'
            },
            verified: 'boolean',
            available: 'boolean'
        }
    },
    
    jobs: {
        jobId: {
            customerId: 'string',
            contractorId: 'string',
            categoryId: 'string',
            subcategoryId: 'string',
            description: 'string',
            status: 'pending|active|completed|cancelled',
            createdAt: 'timestamp',
            completedAt: 'timestamp',
            rating: 'number',
            review: 'string'
        }
    }
};
