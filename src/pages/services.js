import React from 'react';
import '../styles/services.css';
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-4.png';
const Services = () => {
    return (
        <div className='services_container'>
            <section className='service_section'>
                <div className='service-content'>
                    <h1>Our expertise, your dream spaces realised</h1>
                    <p>Explore our tailored architectural solutions designed to bring your vision to life with precision, creativity, and functionality.</p>
                </div>

                <div className='service-description'>
                    <div className='s-contant'>
                        <div className='service-image'>
                            <img src={service1} alt='service-1'></img>
                        </div>
                        <div className='service-describe'>
                            <h1>Architectural design</h1>
                            <p>Our architectural designs blend innovation with functionality, creating spaces that are visually striking, structurally sound, and crafted for lasting impact</p>
                        </div>
                        <div className='s-button'>
                            <button className='service-button'>Get in touch</button>
                        </div>
                    </div>
                    <div className='s-contant'>
                        <div className='service-image'>
                            <img src={service2} alt='service-2'></img>
                        </div>
                        <div className='service-describe'>
                            <h1>Interior design</h1>
                            <p>Our interior designs transform spaces into personalised environments that balance aesthetics, comfort, and functionality, bringing beauty and purpose into every detail.</p>
                        </div>
                        <div className='s-button'>
                            <button className='service-button'>Get in touch</button>
                        </div>
                    </div>
                    <div className='s-contant'>
                        <div className='service-image'>
                            <img src={service3} alt='service-3'></img>
                        </div>
                        <div className='service-describe'>
                            <h1>Electrical design & material consultation</h1>
                            <p>We offer detailed electrical layout designs, ensuring safety and efficiency. Additionally, our architects provide expert guidance on selecting
                                high-quality materials that align with your design vision and budget.</p>
                        </div>
                        <div className='s-button'>
                            <button className='service-button'>Get in touch</button>
                        </div>
                    </div>
                    <div className='s-contant'>
                        <div className='service-image'>
                            <img src={service4} alt='service-4'></img>
                        </div>
                        <div className='service-describe'>
                            <h1>MEP (mechanical, electrical & plumbing) planning</h1>
                            <p>Comprehensive planning ensures the seamless integration of essential systems, optimizing functionality and efficiency for your space. Our team focuses
                                on creating sustainable and cost-effective solutions tailored to your project.</p>
                        </div>
                        <div className='s-button'>
                            <button className='service-button'>Get in touch</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services
