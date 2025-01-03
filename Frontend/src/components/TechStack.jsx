import React from "react";

const techStack = [
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🌱" },
  { name: "Express.js", icon: "🚀" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Axios", icon: "📡" },
];

const TechStack = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center text-gradient bg-gradient-to-r from-blue-500 to-green-500">
        Technology Stack
      </h2>
      <div className="flex justify-center flex-wrap mt-8 gap-6 animate-fade-in">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transform transition duration-300 cursor-pointer"
          >
            <span className="text-4xl">{tech.icon}</span>
            <p className="mt-4 text-lg">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
