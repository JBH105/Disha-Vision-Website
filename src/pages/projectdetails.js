import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/projectdetails.css';

function Projectdetails() {
    const location = useLocation();
    const project = location.state?.project;

    if (!project) {
        return <h2>No project details available</h2>;
    }

    return (
        <div className='apartment-container'>
            <section className='apartment-section'>
                <div className='apartment-image'>
                    <img src={project.pic} alt={project.title} className='apartment-image' />
                </div>
                <div className="apartment-details">
                    <h2 className="apartment-title">{project.title}</h2>
                    <div className="apartment-location">
                        <span>{project.location}</span>
                        <span>|</span>
                        <span>{project.size}</span>
                        <span>|</span>
                        <span>{project.type}</span>
                    </div>
                    <p className="apartment-description">{project.description}</p>
                </div>
                <div className='adagga-image'>
                    {project.otherImages?.map((image, index) => (
                        <img key={index} src={image} alt='devis-picture' className='devi-image' />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projectdetails;
