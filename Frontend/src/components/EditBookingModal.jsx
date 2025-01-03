import { useState } from 'react';
import axios from 'axios';

const EditBookingModal = ({ booking, onClose, onUpdate }) => {
  const [name, setName] = useState(booking.name);
  const [date, setDate] = useState(booking.date);
  const [time, setTime] = useState(booking.time);
  const [guests, setGuests] = useState(booking.guests);
  const [contact, setContact] = useState(booking.contact);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedBooking = {
        ...booking,
        name,
        date,
        time,
        guests,
        contact,
      };

      // Send the updated booking to the backend
      const response = await axios.put(
        `${import.meta.env.VITE_API_URI}/api/bookings/${booking._id}`,
        updatedBooking
      );

      
      onUpdate(response.data);
      

    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 px-6 py-12 top-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Date</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Time</label>
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Guests</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-600">Contact</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-200"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookingModal;
