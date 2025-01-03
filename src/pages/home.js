import group1 from '../assets/Group 13.png';
import group2 from '../assets/Group 14.png';
import View1 from "../assets/slide_1.png";
import View2 from "../assets/slide_2.png";
import View3 from "../assets/slide_3.png";
import View4 from "../assets/slide_4.png";
import View5 from "../assets/slide_5.png";
import View6 from "../assets/slide_6.png";
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-4.png';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';
import project7 from '../assets/project-7.png';
import project8 from '../assets/project-8.png';
import image1 from '../assets/image 4.png';
import image2 from '../assets/image 5.png';
import image3 from '../assets/image 6.png';
import image4 from '../assets/image-4.png';
import image5 from '../assets/image -5.png';
import image6 from '../assets/image-6.png';
import image7 from '../assets/image-7.png';
import image8 from '../assets/image-8.png';
import image9 from '../assets/image-9.png';
import image10 from '../assets/image-10.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/home.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import { LuBuilding2 } from "react-icons/lu";

const projectOptions = [
  {
    id: 1,
    title: "Apartment",
    image: project1,
    alt: "Apartment",
  },
  {
    id: 2,
    title: "Banquet",
    image: project2,
    alt: "Banquet",
  },
  {
    id: 3,
    title: "Bungalow",
    image: project3,
    alt: "Bungalow",
  },
  {
    id: 4,
    title: "Commercial",
    image: project4,
    alt: "Commercial",
  },
  {
    id: 5,
    title: "Commercial cum residential",
    image: project5,
    alt: "Commercial cum residential",
  },
  {
    id: 6,
    title: "Hospital",
    image: project6,
    alt: "Hospital",
  },
  {
    id: 7,
    title: "Mall",
    image: project7,
    alt: "Mall",
  },
  {
    id: 8,
    title: "Township",
    image: project8,
    alt: "Township",
  },
];

const Home = () => {
  let sliderRef = React.useRef();
  const handleNext = () => sliderRef.current.slickNext();
  const handlePrev = () => sliderRef.current.slickPrev();
  const [showMore, setShowMore] = useState(false);
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("scroll-left");
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;

      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
        setScrollDirection("scroll-left");
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        }); 
        setScrollDirection("scroll-right");
      }

      setIsScrolling(false);
      setTimeout(() => {
        setIsScrolling(true);
      }, 3000);
    }
  };

  useEffect(() => {
    if (isHovered || !isScrolling) return;
    const interval = setInterval(() => {
      if (scrollDirection === "scroll-left") {
        scroll("right");
      } else {
        scroll("left");
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered, isScrolling, scrollDirection]);

  const images = [
    { src: View1, alt: "Tapadia city centre, Amravati" },
    { src: View2, alt: "Tapadia city centre, Amravati" },
    { src: View3, alt: "Tapadia city centre, Amravati" },
    { src: View4, alt: "Tapadia city centre, Amravati" },
    { src: View5, alt: "Tapadia city centre, Amravati" },
    { src: View6, alt: "Tapadia city centre, Amravati" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const testimonials = [
    {
      src: image3,
      name: 'Madhur Laddha',
      designation: 'ED Tapadia City Centre Mall Amravati',
      text: `"I highly recommend Ar. Akash Ji for the outstanding design and execution of Tapadia City Centre & Daga Sapphire. Akash Ji & his team transformed our vision into a modern, vibrant space. It very beautifully blends aesthetics with functionality, enhancing the visitor experience and efficiently accommodating high foot traffic. Akash Ji’s attention to detail, commitment to timelines, and creative approach brought a unique appeal to the project, making it a landmark in Amravati. Their ability to integrate local cultural elements with contemporary design has received immense appreciation. I am grateful for his expertise and dedication, which have made Tapadia City Centre a true success & brought us 5 National Awards.`,
      bgColor: '#53A451',
    },
    {
      src: image1,
      name: 'Dr Vijay Bakhtar',
      designation: 'M.D. (NAG.), F.I.C.A (USA)',
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument`,
      bgColor: "#E3B23C",
    },
    {
      src: image2,
      name: 'Vaibhav Mohta',
      designation: 'Managing director and CEO',
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument.`,
      bgColor: '#4A90A4',
    },
    {
      src: image4,
      name: 'Dr Vijay Bakhtar',
      designation: 'M.D. (NAG), F.I.C.A (USA)',
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument`,
      bgColor: '#53A451',
    },
    {
      src: image5,
      name: 'Dr. Pankaj Ghundiyal',
      designation: 'Ghundiyal Radio Diagnostic Centre, Amravati',
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument`,
      bgColor: '#E3B23C',
    },
    {
      src: image6,
      name: 'Vaibhav Mohta',
      designation: 'Managing director and CEO',
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument.`,
      bgColor: '#4A90A4',
    },
    {
      src: image7,
      name: 'Vijay Chhabriya ',
      designation: ' C4 CITY MALL SOHAGPUR M.P',
      text: `I take a moment to congratulate you for your 25 years of career in architecture industry and being the best in it. Your ideas in any of the given scenarios were spot on and really useful for us.Your kind and joyful nature doesn't made us realised that we know each other from 8 years. Your work all around and in our project C4 CITY MALL too was very well handled and done.Weather it was the design to the costing of items with not compromising the quality you were right on the top from day one. I feel honoured that I have worked with you in your beautiful career of 25 years.Thank you sir and many congratulations for this milestone.`,
      bgColor: '#53A451',
    },
    {
      src: image8,
      name: 'Vaibhav Mohta',
      designation: 'Managing director and CEO',
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument`,
      bgColor: '#E3B23C',
    },
    {
      src: image9,
      name: 'Vaibhav Mohta',
      designation: 'Managing director and CEO',
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument.`,
      bgColor: '#4A90A4',
    },
    {
      src: image10,
      name: 'Adv. Vijay Bothra',
      designation: 'Chairman- Abhinandan Urban Cooperative Bank Ltd',
      text: `Your journey has been nothing short of inspiring. You’ve built not only a name but a legacy, one that stands proudly in Amravati and resonates far beyond, making an indelible impact across India. Your impressive infrastructure projects have greatly enriched Amravati’s charm and progress, and your work serves as a benchmark in the field. Throughout this journey, you’ve embraced the values and principles imparted by your father, Shri Vithaldasji Mohata, a mentor whose life lessons and teachings in accountancy have left an enduring influence on all of us. Your dedication to his values is a testament to your character and has become an integral part of your own legacy. `,
      bgColor: '#E3B23C',
    },
    {
      src: image2,
      name: "Vaibhav Mohta",
      designation: "Managing director and CEO",
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument`,
      bgColor: '#53A451',
    },
    {
      src: image3,
      name: "Vaibhav Mohta",
      designation: "Managing director and CEO",
      text: `Architectural field is very vast and dynamic field, it always looks difficult and confusing when you start any project, often there is threat of impossibility. But things become very simple and doable, getable when Akash Mohota is with me. I am associated with him since last two decades, we label him as our family doctor in the architectural field. He is so simple, humble, hardworking, never money oriented, transparent, listen your ideas, will get involved into the depth, always cheerful and positive. His vision and imagination is matchless. I am happy to be associated with such unique personality Project Laali Palace is on the verge of last chapters, I am sure under Akash’s guidelines it will be town’s beautiful monument.`,
      bgColor: '#4A90A4',
    },
  ];

  return (
    <div className="container_home">
      {/*Home section*/}
      <section className="home-section">
        <div className="home-content">
          <img src={group1} alt="group1"></img>
          <h1>CELEBRATING 25 YEARS OF EXCELLENCE</h1>
          <img src={group2} alt="group2"></img>
        </div>
        <div className="home-descripion">
          <h1>Innovative spaces, inspired by vision</h1>
          <h2>
            Redefining architecture with creativity, precision, and lasting
            impact
          </h2>
        </div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index} className="image-content">
                <img src={image.src} alt={image.alt} className="home-fist" />
                <div className="image-caption">
                  <LuBuilding2 className="icon-slider" /> {image.alt}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="icon-arrow">
          <FaArrowLeftLong className="left-icon" onClick={handlePrev} />
          <FaArrowRightLong className="right-icon" onClick={handleNext} />
        </div>
      </section>

      {/*container-section*/}
      <section className="container-section">
        <div className="home-text">
          <h1 className="home-vision">OUR VISION</h1>
          <h2 className="home-timeless">
            Timeless architecture with passion & precision
          </h2>
        </div>
        <div className="home-paragraphs">
          <h1>
            At Disha Vision, we believe architecture is more than just designing
            buildings—it’s about shaping experiences, communities, and the
            future. With 25 years of dedication to innovation and excellence, we
            have earned our reputation as a trusted leader in the architectural
            space. Each project we undertake is a reflection of our passion for
            creative planning, meticulous attention to detail, and our
            commitment to elevating spaces into art forms that inspire and
            endure.
          </h1>

          <h2 className={`home-paragraphs-extra ${showMore ? "show" : "hide"}`}>
            Our core values—integrity, innovation, and collaboration—drive every
            design we create. From conceptualisation to execution, we approach
            every project with a thoughtful balance of functionality and
            aesthetics, ensuring it not only meets the client’s needs but also
            enhances the environment and enriches lives. At Disha Vision, we
            don't just build; we craft stories that stand the test of time.
          </h2>
          <button
            onClick={() => setShowMore(!showMore)}
            className="read-more-btn"
          >
            {showMore ? "...Read less" : "...Read more"}
          </button>
        </div>
      </section>

      {/*Statistics section*/}
      <section className="statistics-section">
        <div className="stat">
          <h1>500+</h1>
          <p>Projects Designed</p>
        </div>
        <div className="stat">
          <h1>35</h1>
          <p>Millions Sq.Ft Constructed</p>
        </div>
        <div className="stat">
          <h1>45</h1>
          <p>cities across India</p>
        </div>

      </section>

      {/*Services section*/}
      <section className="our-services-section">
        <div className="our-services-h1">
          <h1>OUR SERVICES</h1>
          <h2>Our expertise, your dream spaces realized</h2>
        </div>
        <div className="our-services-p">
          <p>
            Explore our tailored architectural solutions designed to bring your
            vision to life with precision, creativity, and functionality.
          </p>
        </div>

        <div className="services-description">
          <div className="service-contant">
            <div className="s-image">
              <img src={service1} alt="service-1"></img>
            </div>
            <div className="s-describe">
              <h1>Architectural design</h1>
              <p>
                Our architectural designs blend innovation with functionality,
                creating spaces that are visually striking, structurally sound,
                and crafted for lasting impact
              </p>
            </div>
          </div>
          <div className="service-contant">
            <div className="s-image">
              <img src={service2} alt="service-2"></img>
            </div>
            <div className="s-describe">
              <h1>Interior design</h1>
              <p>
                Our interior designs transform spaces into personalised
                environments that balance aesthetics, comfort, and
                functionality, bringing beauty and purpose into every detail.
              </p>
            </div>
          </div>
          <div className="service-contant">
            <div className="s-image">
              <img src={service3} alt="service-3"></img>
            </div>
            <div className="s-describe">
              <h1>Electrical design & material consultation</h1>
              <p>
                We offer detailed electrical layout designs, ensuring safety and
                efficiency. Additionally, our architects provide expert guidance
                on selecting high-quality materials that align with your design
                vision and budget.
              </p>
            </div>
          </div>
          <div className="service-contant">
            <div className="s-image">
              <img src={service4} alt="service-4"></img>
            </div>
            <div className="s-describe">
              <h1>MEP (mechanical, electrical & plumbing) planning</h1>
              <p>
                Comprehensive planning ensures the seamless integration of
                essential systems, optimizing functionality and efficiency for
                your space. Our team focuses on creating sustainable and
                cost-effective solutions tailored to your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*project section*/}
      <section className="projects-container-section">
        <h3 className="projects-title">PROJECTS</h3>
        <h1 className="projects-heading">
          Shaping iconic spaces across every sector
        </h1>
        <p className="projects-subtitle">
          From residences to commercial hubs, we redefine excellence in every
          project.
        </p>
        <div className="projects-grid">
          <div className="grid-item">
            <div className='g-image'>
              <img src={project1} alt="Apartment" className="grid-image" />
            </div>
            <div>
              <h2>Apartment</h2>
            </div>
          </div>
          <div className="grid-item">
            <div className='g-image'>
              <img src={project2} alt="Banquet" className="grid-image" />
            </div>
            <div>
              <h2>Banquet</h2>
            </div>
          </div>
          <div className="grid-item">
            <div className='g-image'>
              <img src={project3} alt="Bungalow" className="grid-image" />
            </div>
            <div>
              <h2>Bungalow</h2>
            </div>

          </div>
          <div className="grid-item">
            <div className='g-image'>
              <img src={project4} alt="Commercial" className="grid-image" />
            </div>
            <div><h2>Commercial</h2></div>

          </div>
          <div className="grid-item">
            <div className='g-image'>
              <img src={project5} alt="Commercial cum residential" className="grid-image" />
            </div>
            <h2>Commercial cum residential</h2>
          </div>
          <div className="grid-item">
            <div className='g-image'>
              <img src={project6} alt="Hospital" className="grid-image" />
            </div>
            <h2>Hospital</h2>
          </div>
          <div className="grid-item">
            <div className='g-image'>
              <img src={project7} alt="Mall" className="grid-image" />
            </div>
            <h2>Mall</h2>
          </div>
          <div className="grid-item">
            <div className='g-image'>
              <img src={project8} alt="Township" className="grid-image" />
            </div>
            <h2>Township</h2>
          </div>

        </div>
      </section>

      {/*TESTIMONIALS*/}
      <section className="scroll-container">
        <h1>TESTIMONIALS</h1>
        <h2>Hear it from our customers</h2>
        <div
          className="testimonial-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="scroll-client">
            <div ref={scrollRef} className={`scroll-track ${scrollDirection}`}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="image-section">
                    <div className="one">
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        style={{ backgroundColor: testimonial.bgColor }}
                      />
                      <div className="testimonial-name">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.designation}</p>
                      </div>
                    </div>
                    <div className="t-text">
                      <h3 className="testimonial-text">
                        <p>‟</p> {testimonial.text}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="s-arrow">
            <FaArrowLeftLong
              className="sleft-icon"
              onClick={() => scroll("left")}
            />
            <FaArrowRightLong
              className="sright-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
