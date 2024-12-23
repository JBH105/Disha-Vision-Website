import React, { useState } from 'react'
import '../styles/projects.css';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';
import project7 from '../assets/project-7.png';
import project8 from '../assets/project-8.png';
import pservice1 from '../assets/pservice_1.png';
import pservice2 from '../assets/pservice_2.png';
import pservice3 from '../assets/pservice_3.png';
import pservice4 from '../assets/pservice_4.png';
import pservice5 from '../assets/pservice_5.png';
import pservice6 from '../assets/pservice_6.png';
function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("apartment");
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const apartmentProjects = [
        { src: pservice1, title: "Dagga Sapphire" },
        { src: pservice2, title: "Devi's Heaven" },
        { src: pservice3, title: "Hardeo Residency" },
        { src: pservice4, title: "Kakraniya Residency" },
        { src: pservice5, title: "Mahendra Adobes" },
        { src: pservice6, title: "Sky tower" },
    ];
    const banquetProject = [
        { src: pservice1, title: "Lali Lawns" },
        { src: pservice2, title: "Sikchi Resort" },
        { src: pservice3, title: "Hardeo Residency" },

    ];
    const bungalowProject = [
        { src: pservice1, title: "Dagga Sapphire" },
        { src: pservice2, title: "Devi's Heaven" },

    ];
    return (
        <div className='project_container'>
            <section className='project_section'>
                <div className='p_contant'>
                    <h1>Shaping iconic spaces across every sector</h1>
                    <p>
                        From residences to commercial hubs, we redefine excellence in every project.
                    </p>
                </div>
                <div className='project_description'>
                    <div className="project_items">
                        <div className="project_item" onClick={() => handleCategoryClick("apartment")}>
                            <img src={project1} alt="Apartment" />
                            <h1>Apartment</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className="project_item" onClick={() => handleCategoryClick("Banquet")}>
                            <img src={project2} alt="Banquet" />
                            <h1>Banquet</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className="project_item" onClick={() => handleCategoryClick("Bungalow")}>
                            <img src={project3} alt="Bungalow" />
                            <h1>Bungalow</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className="project_item">
                            <img src={project4} alt="Commercial" />
                            <h1>Commercial</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className="project_item">
                            <img src={project5} alt="Commercial cum residential" />
                            <h1>Commercial cum residential</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className="project_item">
                            <img src={project6} alt="Hospital" />
                            <h1>Hospital</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className="project_item">
                            <img src={project7} alt="Mall" />
                            <h1>Mall</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className="project_item">
                            <img src={project8} alt="Township" />
                            <h1>Township</h1>
                        </div>
                    </div>
                    <div className="project_picture">
                        {selectedCategory === "apartment" && (
                            <div className="main">
                                {apartmentProjects.map((project, index) => (
                                    <div className="project" key={index}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedCategory === "Banquet" && (
                            <div className="main">
                                {banquetProject.map((project, index) => (
                                    <div className="project" key={index}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedCategory === "Bungalow" && (
                            <div className="main">
                                {bungalowProject.map((project, index) => (
                                    <div className="project" key={index}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Projects;
