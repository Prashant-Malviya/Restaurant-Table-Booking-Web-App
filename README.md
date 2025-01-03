# Booking System

This is a **Booking System** project designed to handle reservations for a specified date and time. The system allows users to view available time slots, make bookings, and see a summary of their reservation. It prevents double bookings and provides a seamless user experience.

---

## Features

1. **Availability Display**
   - Show available time slots based on the selected date.
   - Prevent double bookings by checking backend data.

2. **Booking Functionality**
   - Allow users to select a time slot and book it.
   - Validate slot availability before booking.

3. **Booking Summary**
   - Display a confirmation message after successful booking.
   - Show a summary of the reservation details (e.g., date, time, user information).

---

## Tech Stack

### Frontend:
- **React.js**: For building the user interface.
- **Axios**: For API requests.
- **CSS/Tailwind CSS**: For styling the components.

### Backend:
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating APIs.
- **MongoDB**: As the database to store bookings.

---

## Installation and Setup

### Prerequisites:
- Node.js installed on your system.
- MongoDB set up locally or using a cloud provider like MongoDB Atlas.

### Steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/booking-system.git
   cd booking-system
   ```
2. Install Node modules in both frontend and backend.
3. npm run dev for frontend
4. node index.js for backend
