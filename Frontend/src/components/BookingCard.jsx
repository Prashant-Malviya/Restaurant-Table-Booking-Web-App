import { useState } from 'react';
import EditBookingModal from './EditBookingModal';

const BookingCard = ({ booking, onDelete, onUpdate }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleUpdate = (updatedBooking) => {
    
    onUpdate(updatedBooking);
    setShowEditModal(false);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-xl font-bold">{booking.name}</h3>
      <p className="text-gray-700">Date: {new Date(booking.date).toLocaleDateString()}</p>
      <p className="text-gray-700">Time: {booking.time}</p>
      <p className="text-gray-700">Guests: {booking.guests}</p>
      <p className="text-gray-700">Contact: {booking.contact}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setShowEditModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(booking._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
      {showEditModal && (
        <EditBookingModal
          booking={booking}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleUpdate} 
        />
      )}
    </div>
  );
};

export default BookingCard;
