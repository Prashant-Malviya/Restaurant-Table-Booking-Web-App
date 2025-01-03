import React from "react";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="text-center pb-20 pt-5">
        <h1 className="text-5xl font-bold animate-fade-in-down">
          Reservation Management System
        </h1>
        <p className="mt-4 text-xl animate-fade-in-up">
          Simplify and streamline your reservation process with our state-of-the-art system.
        </p>
      </section>

      {/* About Section */}
      <section className="py-5 px-8 bg-white text-gray-800 rounded-xl shadow-lg w-4/5 lg:w-2/3 text-center animate-fade-in space-y-5">
        <h2 className="text-4xl font-bold">
          About the Project
        </h2>
        <p className="mt-4 font-serif font-bold text-lg">
          The Reservation Management System is designed to manage time slots for bookings 
          effectively.
        </p>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Footer */}
      
    </div>
  );
};

export default Home;
