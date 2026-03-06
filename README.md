# Swiftly - Home Services Platform

A Grab-like platform connecting homeowners with verified contractors, engineers, and architects for house-related problems.

## Project Structure

```
Website/
├── index.html              # Login/Register page
├── categories.html          # Property type selection
├── problem.html            # Problem description form
├── candidates.html         # Available contractors list
├── contractor-profile.html # Individual contractor profile
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
└── README.md              # This file
```

## Features

### Current Implementation (Hardcoded)
- **User Authentication**: Login and registration forms (UI only)
- **Category Selection**: Choose property type (House, Condo, Commercial, Lot)
- **Problem Description**: Detailed form for specifying issues
- **Contractor Listings**: Display available contractors with ratings and contact info
- **Contractor Profiles**: Detailed view of contractor information and reviews
- **Responsive Design**: Mobile-friendly interface

### Future Firestore Integration
- User authentication and profiles
- Dynamic contractor database
- Real-time messaging system
- Booking and job management
- Rating and review system

## User Flow

1. **Login/Register** → User authentication
2. **Property Selection** → Choose property type
3. **Problem Description** → Specify issue details, urgency, and budget
4. **Contractor Selection** → View and choose from available contractors
5. **Profile View** → Detailed contractor information
6. **Contact/Messaging** → Connect with contractor (placeholder for now)

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Modern CSS with gradients, animations, and responsive design
- **Database**: Prepared for Firestore integration
- **Deployment**: Static files (ready for any web server)

## Design Principles

- **Clean & Modern**: Inspired by Grab's user-friendly interface
- **Mobile-First**: Responsive design for all devices
- **Accessible**: Semantic HTML and proper ARIA labels
- **Performance**: Minimal JavaScript for fast loading

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Navigate through the user flow

## Future Development

- [ ] Implement Firebase Authentication
- [ ] Create Firestore database structure
- [ ] Add real-time messaging
- [ ] Implement booking system
- [ ] Add payment integration
- [ ] Create contractor dashboard
- [ ] Add notification system

## Contributing

This is a frontend prototype. For production use, integrate with:
- Firebase/Firestore for backend
- Proper authentication system
- Real-time database
- Payment gateway

## License

© 2024 Swiftly. All rights reserved.
