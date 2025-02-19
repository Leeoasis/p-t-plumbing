import React, { useEffect, useRef } from 'react';
import Services from '../../assets/images/Plumbing.jpeg';
import '../../styles/recentProjects.css';

// Image Imports
// Bella Vista
import Bella1 from '../../assets/images/projects/Bella/Bella1.jpg';

// Bobsway
import Bobs1 from '../../assets/images/projects/Bobsway/bobs1.jpg';

// Clifton
import Clifton1 from '../../assets/images/projects/Clifton/clifton1.jpg';

const RecentProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundImage: `url(${Services})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8 animate-slide-in-up">
          Recent Projects
        </h2>
        <p className="text-lg text-center text-white mb-12">
          Take a look at some of our most recent and impactful projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up">
            <img
              src={Bella1}
              alt="first project"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Bella Vista Estate</h3>
            <p>We successfully completed a painting and tiling project at Bella Vista Estate, Kaapzicht Road. Our team handled every aspect of the project, from surface preparation to the final coat of paint and tile installation. The result is a beautifully finished space that enhances the aesthetic appeal and functionality of the property.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-100">
            <img
              src={Bobs1}
              alt="Project 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Eesteriver</h3>
            <p>We successfully completed a bathroom renovation project at 149 Bobs Way, Eesteriver. Our team managed the entire renovation process, from initial design to final installation, ensuring that every detail was executed to the highest standards. The result is a modern, functional, and aesthetically pleasing bathroom that perfectly meets the client's needs and enhances the overall appeal of their home.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-200">
            <img
              src={Clifton1}
              alt="Project 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Camps Bay</h3>
            <p>We recently completed a house renovation project at 6 Clifton Road, Camps Bay. Our team managed the entire renovation process, ensuring that every detail was executed to the highest standards. The result is a beautifully renovated home that perfectly blends modern amenities with the charm of the original structure, enhancing the overall appeal and functionality of the property.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/projects" className="inline-block bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
