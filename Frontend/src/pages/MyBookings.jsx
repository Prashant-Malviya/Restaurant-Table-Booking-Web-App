import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "../components/BookingCard";
import SearchBar from "../components/SearchBar";
import { SearchContext } from "../context/SearchContext";
import toast from "react-hot-toast";


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URI}/api/bookings`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) =>
    booking.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URI}/api/bookings/${id}`);
      setBookings(bookings.filter((booking) => booking._id !== id));

      toast.success('Booking Deleted Successfully!')
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleUpdateBooking = (updatedBooking) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>{

        return booking._id === updatedBooking._id ? updatedBooking : booking
      }
    )
    
  );
  toast.success('Booking Updated Successfully!')
  };

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <div className="flex flex-col justify-center items-center space-y-4">
    <h2 className="text-2xl font-bold mb-4 text-white">My Bookings</h2>
    <SearchBar />
    </div>

    {filteredBookings.length === 0 ? (
        <div className="text-center text-white mt-8">
          <p>No data available</p>
        </div>
      ) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredBookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
            onDelete={handleDelete}
            onUpdate={handleUpdateBooking}
          />
        ))}
      </div>)
      
    }
    </div>
  );
};

export default MyBookings;
