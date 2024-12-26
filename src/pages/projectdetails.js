import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/projectdetails.css';
import { projectData } from '../assets/json/data.local';

function Projectdetails() {
    const { projectType, projectId } = useParams();
    const [projectDetailsData, setProjectDetailsData] = useState();

    useEffect(() => {
        const fetchData = () => {
            if (projectId) {
                
                const res = projectData[projectType]?.find((item) => item.id === parseInt(projectId, 10));
                setProjectDetailsData(res);
            }
        };
        fetchData();
    }, [projectId, projectType]);

    if (!projectDetailsData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='apartment-container'>
            <section className='apartment-section'>
                <div className='apartment-image'>
                    <img src={projectDetailsData?.img} alt={projectDetailsData?.title} className='apartment-image' />
                </div>
                <div className="apartment-details">
                    <h2 className="apartment-title">{projectDetailsData?.title}</h2>
                    <div className="apartment-location">
                        <span>{projectDetailsData?.location}</span>
                        <span>|</span>
                        <span>{projectDetailsData?.size}</span>
                        <span>|</span>
                        <span>{projectDetailsData?.type}</span>
                    </div>
                    <p className="apartment-description">{projectDetailsData?.description}</p>
                </div>
                <div className='adagga-image'>
                    {projectDetailsData?.otherImages?.map((image, index) => (
                        <img key={index} src={image} alt='devi-picture' className='devi-image' />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projectdetails;
