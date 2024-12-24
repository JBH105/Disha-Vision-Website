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
import dsp1 from '../assets/DSP1.png';
import dsp2 from '../assets/DSP2.png';
import devi1 from '../assets/devi1.png';
import devi2 from '../assets/devi2.png';
import devi3 from '../assets/devi3.png';
import { useNavigate } from 'react-router-dom';
function Projects() {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState("apartment");
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const apartmentProjects = [
        { src: pservice1, title: "Dagga Sapphire", pic: [dsp1], location: 'Camp, Amravati', size: '4065 sq.ft', type: 'Residential apartment', otherImages: [dsp2], description: 'The Leaf House is a weekend family home in the lush surrounds of Alibaug, Maharashtra, embedded in a verdant 1.3 acre site at the foothills, away from the sea. The leisurely family home required living spaces, kitchen, dining, a master bedspace, children’s room, a space for guests and a play area as part of the residential architecture. The name and ensuing architectural form of the home emerged from a serendipitous sight of dried leaves strewn about the site.' },
        { src: pservice2, title: "Devi's Heaven", pic: [devi1], location: 'Camp, Amravati', size: '4065 sq.ft', type: 'Residential apartment', otherImages: [devi2, devi3], description: "The Leaf House is a weekend family home in the lush surrounds of Alibaug, Maharashtra, embedded in a verdant 1.3 acre site at the foothills, away from the sea. The leisurely family home required living spaces, kitchen, dining, a master bedspace, children’s room, a space for guests and a play area as part of the residential architecture. The name and ensuing architectural form of the home emerged from a serendipitous sight of dried leaves strewn about the site." },
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
    const CommercialProject = [
        { src: pservice1, title: "Dagga Sapphire" },
        { src: pservice2, title: "Devi's Heaven" },

    ];
    const CommercialcumresidentialProject = [
        { src: pservice1, title: "Dagga Sapphire" },
        { src: pservice2, title: "Devi's Heaven" },

    ];
    const HospitalProject = [
        { src: pservice1, title: "Dagga Sapphire" },
        { src: pservice2, title: "Devi's Heaven" },

    ];
    const MallProject = [
        { src: pservice1, title: "Dagga Sapphire" },
        { src: pservice2, title: "Devi's Heaven" },

    ];
    const TownshipProject = [
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
                        <div className={`project_item ${selectedCategory === 'apartment' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("apartment")}>
                            <img src={project1} alt="Apartment" />
                            <h1>Apartment</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className={`project_item ${selectedCategory === 'Banquet' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("Banquet")}>
                            <img src={project2} alt="Banquet" />
                            <h1>Banquet</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className={`project_item ${selectedCategory === 'Bungalow' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("Bungalow")}>
                            <img src={project3} alt="Bungalow" />
                            <h1>Bungalow</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className={`project_item ${selectedCategory === 'Commercial' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("Commercial")}>
                            <img src={project4} alt="Commercial" />
                            <h1>Commercial</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className={`project_item ${selectedCategory === 'Commercial cum residential' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("Commercial cum residential")}>
                            <img src={project5} alt="Commercial cum residential" />
                            <h1>Commercial cum residential</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className={`project_item ${selectedCategory === 'Hospital' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("Hospital")}>
                            <img src={project6} alt="Hospital" />
                            <h1>Hospital</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className={`project_item ${selectedCategory === 'Mall' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("Mall")}>
                            <img src={project7} alt="Mall" />
                            <h1>Mall</h1>
                        </div>
                        <hr className='project-line'></hr>
                        <div className={`project_item ${selectedCategory === 'Township' ? 'active' : 'disabled'}`} onClick={() => handleCategoryClick("Township")}>
                            <img src={project8} alt="Township" />
                            <h1>Township</h1>
                        </div>
                    </div>
                    <div className="project_picture">
                        {selectedCategory === "apartment" && (
                            <div className="main">
                                {apartmentProjects.map((project, index) => (
                                    <div className="project" key={index} onClick={() => navigate('/projects/details', { state: { project } })}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>
                                            {project.title}
                                        </h3>
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
                        {selectedCategory === "Commercial" && (
                            <div className="main">
                                {CommercialProject.map((project, index) => (
                                    <div className="project" key={index}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedCategory === "Commercial cum residential" && (
                            <div className="main">
                                {CommercialcumresidentialProject.map((project, index) => (
                                    <div className="project" key={index}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedCategory === "Hospital" && (
                            <div className="main">
                                {HospitalProject.map((project, index) => (
                                    <div className="project" key={index}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedCategory === "Mall" && (
                            <div className="main">
                                {MallProject.map((project, index) => (
                                    <div className="project" key={index}>
                                        <div className="image-container">
                                            <img src={project.src} alt={project.title} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedCategory === "Township" && (
                            <div className="main">
                                {TownshipProject.map((project, index) => (
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
