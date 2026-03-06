# Swiftly - Home Services Platform

A Grab-like platform connecting homeowners with verified contractors, engineers, and architects for house-related problems and improvements.

## Features

- **User Authentication**: Login and registration system (ready for Firestore integration)
- **Category Selection**: Browse service categories (House, Condo, Commercial, Lot, Plumbing, Electrical, HVAC, Renovation)
- **Problem Description**: Detailed problem submission with urgency and budget information
- **Professional Matching**: View and compare available contractors based on specialty and ratings
- **Detailed Profiles**: Comprehensive contractor profiles with reviews, contact info, and business details
- **Responsive Design**: Mobile-friendly interface that works on all devices

## Project Structure

```
Website/
├── index.html          # Login/Registration page
├── categories.html     # Service category selection
├── problem.html        # Problem description form
├── candidates.html     # Available contractors list
├── profile.html        # Contractor detailed profile
├── css/
│   └── style.css       # Complete styling for all pages
├── js/
│   └── script.js       # JavaScript functionality and Firestore prep
└── README.md           # This file
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design principles
- **Database**: Ready for Firestore integration
- **Version Control**: Git

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Navigate through the flow:
   - Login/Register → Categories → Problem Description → Candidates → Profile

## Firestore Integration

The codebase is structured for easy Firestore migration:

### Data Structure
- **Users**: Customer and contractor accounts
- **Categories**: Service categories and subcategories
- **Contractors**: Professional profiles and specialties
- **Jobs**: Service requests and project management
- **Reviews**: Customer ratings and feedback

### Implementation Notes
- All form submissions are currently placeholders
- Data structures are defined in `js/script.js`
- Authentication functions are ready for Firebase Auth
- Database queries are prepared for Firestore

### Sample Integration Code
```javascript
// Initialize Firebase (uncomment when ready)
// firebaseUtils.initFirebase();

// User registration
await firebaseUtils.registerUser(userData);

// Login user
await firebaseUtils.loginUser(email, password);
```

## Features in Detail

### Authentication System
- Tab-based login/registration interface
- Form validation and error handling
- Placeholder for Firebase Auth integration

### Category Navigation
- 8 main service categories
- Dynamic subcategory population
- Visual category cards with icons

### Problem Submission
- Detailed description fields
- Urgency level selection
- Budget range options
- Location information

### Contractor Discovery
- Rating-based sorting
- Availability status
- Professional specialties
- Contact information display

### Profile System
- Comprehensive contractor profiles
- Business details and licensing
- Customer reviews and ratings
- Multiple contact methods

## Future Enhancements

- **Messaging System**: Direct contractor-customer communication
- **Payment Processing**: Integrated payment solutions
- **Project Management**: Job tracking and milestones
- **Review System**: Customer feedback and ratings
- **Mobile App**: Native iOS/Android applications
- **Advanced Search**: Filtered contractor search
- **Real-time Notifications**: Status updates and alerts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact the development team.

---

**Swiftly** - Fast. Reliable. Professional.
