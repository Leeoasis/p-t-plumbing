import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../styles/projectsPage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

// Import project images
import ProjectImage from '../assets/images/projects.jpg';

// Bella
import Bella1 from '../assets/images/projects/Bella/Bella1.jpg';
import Bella2 from '../assets/images/projects/Bella/Bella2.jpg';
import Bella3 from '../assets/images/projects/Bella/bella3.jpg';
import Bella4 from '../assets/images/projects/Bella/Bella4.jpg';
import Bella5 from '../assets/images/projects/Bella/Bella5.jpg';
import Bella6 from '../assets/images/projects/Bella/Bella6.jpg';

// Bobsway
import Bobs1 from '../assets/images/projects/Bobsway/bobs1.jpg';
import Bobs2 from '../assets/images/projects/Bobsway/bobs2.jpg';
import Bobs3 from '../assets/images/projects/Bobsway/bobs3.jpg';
import Bobs4 from '../assets/images/projects/Bobsway/bobs4.jpg';

// Clifton
import clifton1 from '../assets/images/projects/Clifton/clifton1.jpg';
import clifton2 from '../assets/images/projects/Clifton/clifton2.jpg';
import clifton3 from '../assets/images/projects/Clifton/clifton3.jpg';
import clifton4 from '../assets/images/projects/Clifton/clifton4.jpg';
import clifton5 from '../assets/images/projects/Clifton/clifton5.jpg';
import clifton7 from '../assets/images/projects/Clifton/clifton7.jpg';
import clifton8 from '../assets/images/projects/Clifton/clifton8.jpg';

// Lovel
import Lovel1 from '../assets/images/projects/Lovel/lovel1.jpg';
import Lovel2 from '../assets/images/projects/Lovel/lovel2.jpg';
import Lovel3 from '../assets/images/projects/Lovel/lovel3.jpg';
import Lovel4 from '../assets/images/projects/Lovel/lovel4.jpg';
import Lovel5 from '../assets/images/projects/Lovel/lovel5.jpg';
import Lovel6 from '../assets/images/projects/Lovel/lovel6.jpg';

// Rohm
import Rohm1 from '../assets/images/projects/Rohm/Rohm1.jpg';
import Rohm2 from '../assets/images/projects/Rohm/Rohm2.jpg';
import Rohm3 from '../assets/images/projects/Rohm/Rohm3.jpg';
import Rohm4 from '../assets/images/projects/Rohm/Rohm4.jpg';

// Capetown
import CapetownImage1 from '../assets/images/projects/Capetown/cape1.jpg';

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: 'Bella Vista Estate kaapzcht road Painting and tiling',
      images: [Bella1, Bella2, Bella3, Bella4, Bella5, Bella6],
      description: 'We successfully completed a painting and tiling project at Bella Vista Estate, Kaapzicht Road. Our team handled every aspect of the project, from surface preparation to the final coat of paint and tile installation. The result is a beautifully finished space that enhances the aesthetic appeal and functionality of the property.',
    },
    {
      id: 2,
      title: '149 Bobs way Eesteriver  Bathroom Renovation',
      images: [Bobs1, Bobs2, Bobs3, Bobs4],
      description: "We successfully completed a bathroom renovation project at 149 Bobs Way, Eesteriver. Our team managed the entire renovation process, from initial design to final installation, ensuring that every detail was executed to the highest standards. The result is a modern, functional, and aesthetically pleasing bathroom that perfectly meets the client's needs and enhances the overall appeal of their home.",
    },
    {
      id: 3,
      title: '6 Clifton Road, Camps Bay House Renovation',
      images: [clifton1, clifton2, clifton3, clifton4, clifton5, clifton7, clifton8],
      description: 'We recently completed a house renovation project at 6 Clifton Road, Camps Bay. Our team managed the entire renovation process, ensuring that every detail was executed to the highest standards. The result is a beautifully renovated home that perfectly blends modern amenities with the charm of the original structure, enhancing the overall appeal and functionality of the property.',
    },
    {
      id: 4,
      title: 'Stellenbosch Bathroom Renovation',
      images: [Lovel1, Lovel2, Lovel3, Lovel4, Lovel5, Lovel6],
      description: "We recently completed a bathroom renovation project in Stellenbosch. Our team managed the entire process, from initial design to final installation, ensuring that every detail was executed to the highest standards. The result is a modern, functional, and aesthetically pleasing bathroom that perfectly meets the client's needs and enhances the overall appeal of their home.",
    }, {
      id: 5,
      title: 'Capetown House Project',
      images: [CapetownImage1],
      description: "We also completed a residential construction project in Cape Town. From concept to completion, our team delivered a high-quality home that combines modern design with practical functionality. The finished property not only meets the client's specific needs but also adds to the architectural beauty of the Cape Town area.",
    }, {
      id: 6,
      title: '44 Rohm rd Goodwood  Bathroom and Kitchen  Renovation',
      images: [Rohm1, Rohm2, Rohm3, Rohm4],
      description: 'We recently completed a bathroom and kitchen renovation project at 44 Rohm Rd, Goodwood. Our team managed the entire renovation process, from initial design to final installation, ensuring that every detail was executed to the highest standards. The result is a modern, functional, and aesthetically pleasing bathroom and kitchen that perfectly meet the needs of our client and enhance the overall appeal of their home.',
    },
  ];

  const handbobsrojectClick = (project) => {
    setSelectedProject(project);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  return (
        <div className="projects-page">
            {/* Hero Section */}
            <section
                className="relative py-24 bg-cover bg-center animate__animated animate__fadeIn"
                style={{ backgroundImage: `url(${ProjectImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl font-bold text-center text-white animate__animated animate__fadeInUp mb-8">
                        Our Projects
                    </h1>
                    <p className="text-xl text-center text-white mb-12 animate__animated animate__fadeInUp animate__delay-1s">
                        Take a look at some of the projects we've completed. Our commitment to quality and excellence
                        is reflected in every project we undertake.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="project-card shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => handbobsrojectClick(project)}
                                data-aos="fade-up"
                            >
                                <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover" />
                                <div className="p-6 bg-white">
                                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                    <span className="text-orange-600 hover:text-orange-700 font-semibold mt-4 inline-block">
                                        View Gallery
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Modal */}
            {selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        <button
                            className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
                            onClick={closeGallery}
                        >
                            &times;
                        </button>
                        <Carousel infiniteLoop useKeyboardArrows showThumbs={false}>
                            {selectedProject.images.map((image, index) => (
                                <div key={index} className="h-64 md:h-80">
                                    <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </Carousel>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <button
                                onClick={closeGallery}
                                className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
                            >
                                Close Gallery
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-8 animate__animated animate__pulse animate__infinite">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-12">
                        Let's work together to create something amazing. Contact us today to discuss your project and get
                        a free quote.
                    </p>
                    <a
                        href="/contact"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out"
                    >
                        Get a Free Quote
                    </a>
                </div>
            </section>
        </div>
  );
};

export default ProjectsPage;
